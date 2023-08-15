import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./articuloForm.css";


const ArticuloForm = ({ data }) => {
  
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

  const setToupdate = () => {
    setArticuloU(data);
    setCategoria(data.categoria); // Sincronizar la categoría seleccionada
  };

  useEffect(() => {
    setToupdate();
  }, [data]);
  
  const handleUpdate = async (event) => {

    event.preventDefault();
    try {
      const response = await axios.patch(`https://back-api-fofb.onrender.com/api/articles/${data._id}`, articuloU);
      console.log('Artículo actualizado:', response.data);
      console.log(articuloU)
      setArticuloU(initialStateValue)
      setCategoria('')
    } catch (error) {
      console.error('Error al actualizar el artículo:', error);
      console.log(articuloU)
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
    <form className="articuloForm">
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={articuloU.titulo}
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
              articuloU.categoria == ""
                ? "seleccione un articulo"
                : articuloU.categoria
            }
          >
            {articuloU.categoria == ""
              ? "seleccione un articulo"
              : articuloU.categoria}
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
          value={articuloU.descripcionBreve}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input name="imagen" type="file" onChange={handleInputChange} />

        {articuloU.imagen && (
          <p>Archivo seleccionado: {articuloU.imagen.name}</p>
        )}
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={articuloU.descripcion}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdate} type="submit">
        {Object.values(articuloU).some((value) => value !== "")
          ? "Actualizar"
          : "Enviar"}
      </button>
    </form>
  );
};

export default ArticuloForm;
