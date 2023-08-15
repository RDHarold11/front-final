import "./card-container.css";
import { useState } from "react";
import Card from "../Card/card";
import { Fade } from "react-awesome-reveal";
import CardPlaceholder from "../card-placeholder/cardPlaceholder";
import axios from "axios";



// GetterData es una funcion asyncrona que retorna un arrelgo de tipo [{}] con objetos de tipo article, clase creada mas abajo
function CardContainer({ title = "Últimos eventos", getterData = fetchEvents}) {
  const [isLoading, setLoadState] = useState(true);
  let relleno =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam corrupti iusto quam doloribus obcaecati distinctio";

  let [datos, setDatos] = useState([]);

  if (isLoading) {
    getterData().then((data) => {
      setDatos(data)
    })
    .then(() => {
      setLoadState(false);
    })
    .catch((error) => {
      console.log("El error es:", error)
    })
  }

  return (
    <Fade direction="left">
      <div className="card-container">
        <h2 className="">{title}</h2>
        <div className="container">
          <div className="cards d-flex flex-column flex-md-row flex-wrap w-100">
            {isLoading ? (
              <>
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
              </>
            ) : datos.length == 0 ? (
              <div className="py-3 px-5 bg-secondary d-flex align-items-center justify-content-center rounded text-light">
                <span> No hay información agregada </span>
              </div>
            ) : (
              datos.map((dato) => (
                <Card
                  title={dato.title}
                  content={dato.content}
                  imageUrl={dato.imageUrl}
                  cardId={dato.cardId}
                  key={dato.cardId}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export const fetchEvents = async (type = 'Evento') => {
  try {
      const response = await axios.get(
      `https://back-api-fofb.onrender.com/api/articles/getArticlesBy/${type}`
      );

      const eventos = []
 
      response.data.forEach((evento) => {
        eventos.push(new Article(
          evento.titulo,
          evento.descripcion,
          evento.imagen? evento.imagen: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          evento._id
        ));
      })

      return eventos;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

export class Article {
  constructor(title, content, imageUrl, cardId) {
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
    this.cardId = cardId;
  }
}


export default CardContainer;
