import "./card-container.css";
import React, {useState} from "react";
import Card from "../Card/card";

import CardPlaceholder from '../card-placeholder/cardPlaceholder';


function CardContainer({ title = "Últimos eventos" }) {

  const [isLoading, setLoadState] = useState(Boolean);
  const [articles, setArticles] = useState([]);

  const fetchArticles= async()=>{
    const response = await fetch(`https://back-api-fofb.onrender.com/api/articles/getArticles`)
    setLoadState(false)
    if (response) {
      
      const data = await response.json()
      console.log(data)
      setArticles(data)
    }else{
      
      console.log(response.status)
    }
  }

  setTimeout(() => {
    fetchArticles();
  }, []);

  return (
    <div className="card-container">
      <h2 className="">{title}</h2>
      <div className="container">
        <div className="cards d-flex flex-column flex-md-row flex-wrap w-100">
          {isLoading? 
              (<>
                 <CardPlaceholder/>
                 <CardPlaceholder/>
                 <CardPlaceholder/>
                 <CardPlaceholder/>
              </>) : 
              articles.length == 0 ? (
                <div className="py-3 px-5 bg-secondary d-flex align-items-center justify-content-center rounded text-light">
                  <span> No hay información agregada </span>
                </div>
              ) : (
                articles.map((data) => (
                      <Card
                      title={data.titulo}
                      content={data.descripcion}
                      imageUrl=''
                      cardId={data.cardId}
                      key={data.cardId}
                    />
                    
                  )
                )
              )
          }
        </div>
      </div>
    </div>
  );
}

let prueba = async (x = () => {}) => {
  setTimeout(x,700);
}

export default CardContainer;
