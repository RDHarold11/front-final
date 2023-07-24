import React from "react";
import "./card.css";

export default function Card({ title, content, imageUrl, cardId }) {
  return (
    <>
      <div className="card m-1" key={cardId}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ objectFit: "cover", height: "150px" }}
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{title}</h3>
          <p className="card-text" style={{ flexGrow: 2 }}>
            {content}
          </p>
          <a href="#" className="btn btn-primary">
            Ver más
          </a>
        </div>
      </div>
    </>
  );
}
