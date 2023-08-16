import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ title, content, imageUrl, cardId }) {
  const localImg = "https://back-api-fofb.onrender.com/images/";
  return (
    <div className="card m-1">
        <img
          src={localImg + imageUrl}
          className="card-img-top"
          alt="..."
          style={{ objectFit: "cover", height: "150px" }}
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{title}</h3>
          <p className="card-text" style={{ flexGrow: 2 }}>
            {content}
          </p>
          <Link to={"detalles/" + cardId} className="btn btn-primary">
            Ver más
          </Link>
        </div>
    </div>
  );
}
