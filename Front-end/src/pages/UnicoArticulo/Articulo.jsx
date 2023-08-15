import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./articulo.css";
import { useParams } from "react-router-dom";

const Articulo = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  const fetchUnique = async () => {
    const response = await fetch(
      `https://back-api-fofb.onrender.com/api/articles/${id}`
    );
    if (response) {
      const data = await response.json();
      console.log(data);
      setArticle(data);
    } else {
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchUnique();
  }, []);

  return (
    <>
      <Navbar />
      <div className="uacontainer">
        <div className="auimage">
          <img
            src="https://img.freepik.com/vector-gratis/fondo-azul-memphis-medios-tonos-elementos-linea_1017-33622.jpg?w=2000&t=st=1690479920~exp=1690480520~hmac=708bb1c3401f3bdc50d9d19faf648f27582bef44f1bba4d04935a6c228bf4551"
            alt=""
          />
        </div>
        <section className="uaSection">
          <h1 className="titulounico">{article.titulo}</h1>
          <h2 className="titulounico">DESCRIPCION</h2>
          <p>{article.descripcion}</p>
          <h2 className="titulounico">DIRECTOR</h2>
          <p>ALBERTO SOSA</p>
        </section>
        <div className="bottomText">
          <p>
            {article.descripcionBreve}
          </p>
        </div>
      </div>
    </>
  );
};

export default Articulo;
