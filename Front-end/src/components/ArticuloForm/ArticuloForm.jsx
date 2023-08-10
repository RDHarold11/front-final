import React, { useEffect, useState } from "react";
import "./articuloForm.css";
import axios from "axios";

const ArticuloForm = ({ data, idArticulo }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [articulo, setArticulo] = useState("");
  const [id, setId] = useState(null);
  const [datos, setDatos] = useState([]);

  const setToupdate = () => {
    setArticulo(data);
  };
  useEffect(() => {
    setToupdate();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://back-api-fofb.onrender.com/api/articles/getArticles"
      );
      setDatos(response.data);
    };
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      id,
      titulo,
      descripcionBreve,
      descripcion,
      categoria,
      articulo,
    };
    if (id) {
      try {
        await axios.patch(
          `https://back-api-fofb.onrender.com/api/articles/${id}`,
          newArticle
        );
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log(newArticle);
        await axios.post("https://back-api-fofb.onrender.com/api/articles", {
          newArticle,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const categorias = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    // Agrega aquí más categorías
  ];

  return (
    <form onSubmit={handleSubmit} className="articuloForm">
      <div>
        <label>Id:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div>
        <label>Categoría:</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">
            {!articulo ? "Seleccionar categoría" : articulo.categoria}
          </option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Breve descripción:</label>
        <input
          type="text"
          value={descripcionBreve}
          onChange={(e) => setDescripcionBreve(e.target.value)}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button type="submit">{id ? "Actualizar" : "Enviar"}</button>
    </form>
  );
};

export default ArticuloForm;
