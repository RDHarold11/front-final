import { Link } from "react-router-dom";
import "./admin-articles-viewer.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminArticleViewer({ className,update }) {
  const [articulos, setArticulos] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://back-api-fofb.onrender.com/api/articles/getArticles"
      );
      setArticulos(response.data);
    } catch (error) {
      console.log(error);
      setStateError(true)
    }
    setStateLoad(false);
  };

  const updateData =(articulo)=>{
    const datos = articulo
    setArticulosU(datos)
    update(datos)
  }

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
          {articulos.length > 0? articulos.map((articulo) => (
            <tr key={articulo._id}>
              <td>{articulo._id}</td>
              <td>{articulo.titulo}</td>
              <td>{articulo.descripcionBreve}</td>
              <td>
                <Link
                  to={`/detalles/${articulo.id}`}
                  className="btn btn-primary d-block mx-auto"
                >
                  Visualizar
                </Link>
              </td>
              <td>
                <Link onClick={()=>updateData(articulo)} to="#" className="w-100 btn btn-primary">
                  Editar
                </Link>
              </td>
              <td>
                <button className="w-100 btn btn-primary">Eliminar</button>
              </td>
            </tr>
          )): <tr><td colSpan={6} className="text-center"> {isLoading? "Cargando..." : isError? "Ha ocurrido algo inesperado, trate más tarde" : "No hay articulos agregados"} </td></tr>}
        </tbody>
      </table>
    </div>
  );
}
