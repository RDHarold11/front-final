import { useEffect, useState } from "react";
import "./recientes.css";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { Article } from "../CardContainer/card-container";
import { Link } from "react-router-dom";

const Recientes = () => {
  const [recentPost, setRecentPost] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://back-api-fofb.onrender.com/api/articles/getArticles`
        );
        const lastIndex = response.data.length - 1;
        if (lastIndex >= 1) {
          const lastTwoArticles = [
            response.data[lastIndex - 1],
            response.data[lastIndex],
          ];
          // Hacer algo con lastTwoArticles (por ejemplo, setearlo en algún estado)
          setRecentPost(lastTwoArticles); // Asumiendo que tienes un estado para esto
        }
      } catch (error) {
        console.log(error);
        return [{}, {}];
      }
    }
    getData();
  }, []);
  const localImg = "https://back-api-fofb.onrender.com/images/";
  return (
    <Fade direction="left">
      <div className="recentsContainer">
        <h1 className="titulo">RECIENTES</h1>
        <section className="w-100 px-3">
          <div className="img-container">
            <img
              src={
                recentPost[0]?.imagen
                  ?  recentPost[0]?.imagen
                  : "https://img.freepik.com/vector-gratis/fondo-azul-memphis-medios-tonos-elementos-linea_1017-33622.jpg?w=2000&t=st=1690479920~exp=1690480520~hmac=708bb1c3401f3bdc50d9d19faf648f27582bef44f1bba4d04935a6c228bf4551"
              }
              alt=""
              style={{ width: "400px" }}
            />
          </div>
          <div className="main__container w-100">
            <div className="first__section">
              <h2>{recentPost[0]?.titulo}</h2>
              <p>{recentPost[0]?.descripcion}</p>
              <Link to={`detalles/${recentPost[0]?._id}`} className="btn">
                Leer más
              </Link>
            </div>
            <hr />
            <div className="second__section">
              <div>
                <img
                  src={
                    recentPost[1]?.imagen
                      ? recentPost[1]?.imagen
                      : "https://img.freepik.com/vector-gratis/fondo-azul-memphis-medios-tonos-elementos-linea_1017-33622.jpg?w=2000&t=st=1690479920~exp=1690480520~hmac=708bb1c3401f3bdc50d9d19faf648f27582bef44f1bba4d04935a6c228bf4551"
                  }
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>
              <div>
                <h2>{recentPost[1]?.titulo}</h2>
                <p>{recentPost[1]?.descripcion}</p>
                <Link to={`/detalles/${recentPost[1]?._id}`} className="btn">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Recientes;
