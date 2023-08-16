import React, { useEffect, useState } from "react";
import axios from "axios";
import "./articuloForm.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ArticuloForm = ({ data, setEditando, editando }) => {
  const initialStateValue = {
    titulo: "",
    categoria: "",
    descripcionBreve: "",
    imagen: "",
    descripcion: "",
  };
  const navigate = useNavigate();

  const [articuloU, setArticuloU] = useState(initialStateValue);
  const [categoria, setCategoria] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcion, setDescription] = useState("");
  const [imagen, setImagen] = useState(null);

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
    if (editando) {
      try {
        const nuevosDatos = {
          titulo: articuloU.titulo,
          categoria: articuloU.categoria,
          descripcionBreve: articuloU.descripcionBreve,
          descripcion: articuloU.descripcion,
        };
        if (imagen) {
          const dataImg = new FormData();
          const fileName = Date.now() + imagen.name;
          /* dataImg.append("name", fileName); */
          dataImg.append("file", imagen);
          /*  dataImg.append("file", imagen); */
          dataImg.append("upload_preset", "images");
          try {
            /* await axios.post(
              "https://back-api-fofb.onrender.com/api/upload",
              dataImg
              ); */
              const res = await axios.post("https://api.cloudinary.com/v1_1/dttkhfrdi/image/upload", dataImg)
              console.log(res.data.secure_url)
              nuevosDatos.imagen = res.data.secure_url;
          } catch (error) {
            console.log(error);
          }
          try {
            await axios.patch(
              `https://back-api-fofb.onrender.com/api/articles/${data._id}`,
              nuevosDatos
            );
            navigate(0);
          } catch (error) {
            console.error("Error al actualizar el artículo:", error);
            console.log(articuloU);
          }
        } else {
          try {
            const response = await axios.patch(
              `https://back-api-fofb.onrender.com/api/articles/${data._id}`,
              articuloU
            );
            if (response.status === 200) {
              window.location.reload()
            }
          } catch (error) {
            console.error("Error al actualizar el artículo:", error);
            console.log(articuloU);
          }
        }
        setArticuloU(initialStateValue);
        setCategoria("");
        setEditando(true);
      } catch (error) {
        console.error("Error al actualizar el artículo:", error);
        console.log(articuloU);
      }
    } else {
      try {
        if (!titulo || !categoria || !descripcionBreve || !descripcion) {
          toast.error("Campos vacios");
        } else {
          const newArticle = {
            titulo,
            categoria,
            descripcionBreve,
            descripcion,
          };
          const res = await axios.post(
            "https://back-api-fofb.onrender.com/api/articles/",
            newArticle
          );
          if (res.status == 200) {
            window.location.reload();
          } else {
            toast.error("Ocurrio un error");
          }
          setEditando(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const categorias = ["Evento", "Anuncio"];

  return (
    <>
      <ToastContainer />
      <form className="articuloForm">
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={articuloU.titulo ? articuloU.titulo : titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
              handleInputChange(e);
            }}
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
            value={
              articuloU?.descripcionBreve
                ? articuloU?.descripcionBreve
                : descripcionBreve
            }
            onChange={(e) => {
              setDescripcionBreve(e.target.value);
              handleInputChange(e);
            }}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            disabled={!editando}
            name="imagen"
            type="file"
            accept="image/png,image/jpeg"
            onChange={(e) => {
              setImagen(e.target.files[0]);
              handleInputChange(e);
            }}
          />

          {articuloU.imagen && (
            <p>Archivo seleccionado: {articuloU.imagen.name}</p>
          )}
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={
              articuloU?.descripcion ? articuloU?.descripcion : descripcion
            }
            onChange={(e) => {
              setDescription(e.target.value);
              handleInputChange(e);
            }}
          />
        </div>
        <button onClick={handleUpdate} type="submit">
          {editando ? "Actualizar" : "Enviar"}
        </button>
      </form>
    </>
  );
};

export default ArticuloForm;
