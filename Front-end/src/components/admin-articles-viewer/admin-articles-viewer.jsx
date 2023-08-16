import { Link } from "react-router-dom";
import "./admin-articles-viewer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {AiFillDelete, AiFillEye, AiFillEdit} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export default function AdminArticleViewer({ className, update, setEditando }) {
  const [articulos, setArticulos] = useState([]);
  const [isLoading, setStateLoad] = useState(true);
  const [isError, setStateError] = useState(false);
  const [articuloU, setArticulosU] = useState([]);

  const navigate = useNavigate()
  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://back-api-fofb.onrender.com/api/articles/getArticles"
      );
      setArticulos(response.data);
    } catch (error) {
      console.log(error);
      setStateError(true);
    }
    setStateLoad(false);
  };

  const handleDelete = async (id) => {
    if(window.confirm(`¿Estas seguro de eliminar este articulo ${id}?`)){
      const response = await axios.delete(`https://back-api-fofb.onrender.com/api/articles/deletepost/${id}`)
      if(response.status == 200){
        navigate(0)
      }
    }
  }

  const updateData = (articulo) => {
    const datos = articulo;
    setEditando(true);
    update(datos);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={"adminViewerContainer " + className}>
      <table className="table adminViewer">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th className="w-25">Descripción</th>
            <th>visualizar</th>
            <th colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulos.length > 0 ? (
            articulos.map((articulo) => (
              <tr key={articulo._id}>
                <td style={{width: "100px"}}>{articulo._id}</td>
                <td style={{textAlign: "center"}}>{articulo.titulo}</td>
                <td style={{textAlign: "center"}}>{articulo.descripcionBreve}</td>
                <td>
                  <Link
                    to={`/detalles/${articulo._id}`}
                    className="btn ver"
                  >
                    <AiFillEye color="white" size={25}/>
                  </Link>
                </td>
                <td>
                  <button
                    className="w-100 btn editar"
                    onClick={() => updateData(articulo)}
                  >
                    <AiFillEdit color="white" size={25}/>
                  </button>
                </td>
                <td>
                  <button className="w-100 btn eliminar" onClick={() => handleDelete(articulo._id)}><AiFillDelete color="white" size={25}/></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                {" "}
                {isLoading
                  ? "Cargando..."
                  : isError
                  ? "Ha ocurrido algo inesperado, trate más tarde"
                  : "No hay articulos agregados"}{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
