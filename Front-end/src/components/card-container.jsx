import React from "react";
import "./card-container.css";

function CardContainer(title = "Últimos eventos") {
    return (<>
        <div className="card-container">
            <h2>{title}</h2>
            <div className="cards d-flex justify-content-start flex-column flex-md-row justify-content-md-around">
                {/* <Cards /> */}
            </div>
        </div>

    </>);
}

export default CardContainer;