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
            src={
              article.imagen ? article.imagen : "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
            }
            alt=""
            className="last_article__img"
          />
        </div>
        <section className="uaSection">
          <h1 className="titulounico articulo__titulo">{article.titulo}</h1>
          <h2 className="titulounico">BREVE DESCRIPCION</h2>
          <p className="description">{article.descripcion}</p>
          <h2 className="titulounico">DIRECTOR</h2>
          <p>ALBERTO SOSA</p>
        </section>
        <div className="bottomText">
          <p>{article.descripcionBreve}</p>
        </div>
      </div>
    </>
  );
};

export default Articulo;
