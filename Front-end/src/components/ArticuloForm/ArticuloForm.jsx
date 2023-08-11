import React, { useEffect, useState } from "react";
import axios from "axios";
import "./articuloForm.css";

const ArticuloForm = ({ data, setEditando, editando }) => {
  const [datos, setDatos] = useState([]);
  const initialStateValue = {
    titulo: "",
    categoria: "",
    descripcionBreve: "",
    imagen: "",
    descripcion: "",
  };

  const [articuloU, setArticuloU] = useState(initialStateValue);
  const [categoria, setCategoria] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticuloU({ ...articuloU, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://back-api-fofb.onrender.com/api/articles/getArticles"
      );
      setDatos(response.data);
    };
    fetchData();
  }, []);
  /* 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !descripcionBreve || !descripcion || !categoria) {
      alert("Datos incompletos");
    }
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
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const postArticle = {
          titulo,
          descripcionBreve,
          descripcion,
          categoria,
        };
        await axios.post("http://localhost:5500/api/articles/", postArticle);
      } catch (error) {
        console.log(error);
      }
    }
  }; */

  const setToupdate = () => {
    setArticuloU(data);
    setCategoria(data?.categoria); // Sincronizar la categoría seleccionada
  };

  useEffect(() => {
    setToupdate();
  }, [data]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (editando) {
      try {
        await axios.patch(
          `https://back-api-fofb.onrender.com/api/articles/${data._id}`,
          articuloU
        );
        window.location.reload();
        setArticuloU(initialStateValue);
        setEditando(true);
        setCategoria("");
      } catch (error) {
        console.error("Error al actualizar el artículo:", error);
        console.log(articuloU);
      }
    } else {
      try {
        await axios.post(
          "https://back-api-fofb.onrender.com/api/articles/",
          articuloU
        );
        setEditando(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const categorias = [
    "Anuncio",
    "Evento",

    // Agrega aquí más categorías
  ];

  return (
    <form className="articuloForm">
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={articuloU?.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Categoría:</label>
        <select
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            setArticuloU({ ...articuloU, categoria: e.target.value });
          }}
        >
          <option
            value={
              articuloU?.categoria == ""
                ? "seleccione un articulo"
                : articuloU?.categoria
            }
          >
            {articuloU?.categoria == ""
              ? "seleccione un articulo"
              : articuloU?.categoria}
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
          name="descripcionBreve"
          type="text"
          value={articuloU?.descripcionBreve}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input name="imagen" type="file" onChange={handleInputChange} />

        {articuloU?.imagen && (
          <p>Archivo seleccionado: {articuloU.imagen.name}</p>
        )}
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={articuloU?.descripcion}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdate} type="submit">
        {editando ? "Actualizar" : "Enviar"}
      </button>
    </form>
  );
};

export default ArticuloForm;
