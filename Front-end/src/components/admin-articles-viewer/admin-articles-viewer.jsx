import { Link } from "react-router-dom";
import "./admin-articles-viewer.css";

export default function AdminArticleViewer({className}) {
  let datos = [
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
    {
      id: Math.floor(Math.random() * 10),
      titulo: `Prueba#${Math.floor(Math.random() * 10)}`,
      descripcion: "Lorem ipsum dolor sit, amet consectetur ",
    },
  ];

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
          {datos.map((articulo) => (
            <tr className="" key={articulo.id}>
              <td key={articulo.key}>{articulo.id}</td>
              <td key={articulo.key}>{articulo.titulo}</td>
              <td key={articulo.key}>
                {articulo.descripcion + ` ${articulo.descripcion.length - 2}`}
              </td>
              <td key={articulo.key}>
                <Link
                  to={`/detalles/${articulo.id}`}
                  className="btn btn-primary d-block mx-auto"
                >
                  Visualizar
                </Link>
              </td>
              <td key={articulo.key}>
                <Link to="#" className="w-100 btn btn-primary">
                  Editar
                </Link>
              </td>
              <td key={articulo.key}>
                <button className="w-100 btn btn-primary">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
