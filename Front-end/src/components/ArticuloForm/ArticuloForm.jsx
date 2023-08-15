import { useEffect, useState } from "react";
import axios from "axios";
import "./articuloForm.css";
import { ToastContainer, toast } from "react-toastify";

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
  const [titulo, setTitulo] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcion, setDescription] = useState("");

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
        const res = await axios.patch(
          `https://back-api-fofb.onrender.com/api/articles/${data._id}`,
          articuloU
        );
        if (res.status == 200) {
          window.location.reload();
        }
        setArticuloU(initialStateValue);
        setEditando(true);
        setCategoria("");
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

  const categorias = [
    "Anuncio",
    "Evento",

    // Agrega aquí más categorías
  ];
  return (
    <>
      <ToastContainer />
      <form className="articuloForm">
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={articuloU?.titulo ? articuloU?.titulo : titulo}
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
          <input name="imagen" type="file" onChange={handleInputChange} />

          {articuloU?.imagen && (
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
