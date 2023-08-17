import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./articulo.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer"

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
      <div className="uacontainer p-3">
        <div className="auimage">
          <img
            src={
              article.imagen ? article.imagen : "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
            }
            alt=""
            className="last_article__img"
          />
        </div>
        <div className="columnContainer">
          <div className="bottomText p-2 my-3">
            <h2 className="titulounico w-100 mb-3">Resumen</h2>

            <p>{article.descripcionBreve}</p>
          </div>
          <div className="bottomText p-2 my-3">
            <h2 className="titulounico w-100">DIRECTOR</h2>
            <p>ALBERTO SOSA</p>
          </div>

        </div>
        <section className="uaSection  rounded px-4 py-2 my-3">
          <h1 className="titulounico articulo__titulo">{article.titulo}</h1>
          <small>{new Date(article.createdAt).toLocaleString()}</small>
          <h2 className="titulounico w-100">DESCRIPCION</h2>
          <p className="description">{article.descripcion}</p>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Articulo;
