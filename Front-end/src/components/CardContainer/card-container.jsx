import "./card-container.css";
import { useState } from "react";
import Card from "../Card/card";
import { Fade } from "react-awesome-reveal";
import CardPlaceholder from "../card-placeholder/cardPlaceholder";

function CardContainer({ title = "Últimos eventos" }) {
  const [isLoading, setLoadState] = useState(true);
  let relleno =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam corrupti iusto quam doloribus obcaecati distinctio";

  let datos = [
    {
      title: "Prueba#1",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/edificio-escolar-institucion-educativa-universidad_107791-1051.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10,
    },
    {
      title: "Prueba#2",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-escuela-secundaria_114360-8329.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 1010,
    },
    {
      title: "Prueba#3",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/edificio-universitario-banner-institucion-educativa_1441-3616.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10100,
    },
    {
      title: "Prueba#4",
      content: "Limpieza general de las aulas de clases",
      imageUrl:
        "https://img.freepik.com/vector-gratis/aula-vacia-interior-escuela-o-clase-universitaria_107791-631.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 101000,
    },
  ];

  setTimeout(() => {
    setLoadState(false);
  }, 2500);

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

let prueba = async (x = () => {}) => {
  setTimeout(x, 700);
};

export default CardContainer;
