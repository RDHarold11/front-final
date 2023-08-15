import { useEffect, useState } from "react";
import "./recientes.css";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import {Article} from "../CardContainer/card-container"

const Recientes = () => {

  let [primerArticulo, setPrimerArticulo] = useState({})
  let [segundoArticulo, setsegundoArticulo] = useState({}) 


  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
        `https://back-api-fofb.onrender.com/api/articles/getRecentsArticles`
        );
        const data = response.data;
        setPrimerArticulo(new Article(
          data[0].titulo,
          data[0].descripcionBreve,
          data[0].imagen? data[0].imagen : "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          data[0]._id
        ));
  
        setsegundoArticulo(new Article(
          data[1].titulo,
          data[1].descripcionBreve,
          data[1].imagen? data[1].imagen : "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          data[1]._id
        ));
      }catch (error) {
        console.log(error);
        return [{}, {}];
      } 
    }

    getData();

  }, [])

  
  return (
    <Fade direction="left">
      <div className="recentsContainer">
        <h1 className="titulo">RECIENTES</h1>
        <section className="w-100 px-3">
          <div>
            <img
              src={primerArticulo.imageUrl}
              alt=""
            />
          </div>
          <div className="main__container w-100">
            <div className="first__section">
              <h2>{primerArticulo.title}</h2>
              <p>
                {primerArticulo.content}
              </p>
              <button onClick={() => (window.location.href = `/detalles/${primerArticulo.cardId}`)}>
                Leer más
              </button>
            </div>
            <hr />
            <div className="second__section">
              <div>
                <img
                  src={segundoArticulo.imageUrl}
                  alt=""
                />
              </div>
              <div>
                <h2>{segundoArticulo.title}</h2>
                <p>
                  {segundoArticulo.content}
                </p>
                <button
                  onClick={() => (window.location.href = `/detalles/${segundoArticulo.cardId}`)}
                >
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Recientes;