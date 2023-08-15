import "./card-container.css";
import { useState } from "react";
import Card from "../Card/card";
import { Fade } from "react-awesome-reveal";
import CardPlaceholder from "../card-placeholder/cardPlaceholder";
import axios from "axios";



// GetterData es una funcion asyncrona que retorna un arrelgo de tipo [{}] con objetos de tipo article, clase creada mas abajo
function CardContainer({ title = "Últimos eventos", getterData = fetchEvents}) {
  const [isLoading, setLoadState] = useState(true);
  let relleno =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam corrupti iusto quam doloribus obcaecati distinctio";

  let [datos, setDatos] = useState([]);

  if (isLoading) {
    getterData().then((data) => {
      setDatos(data)
    })
    .then(() => {
      setLoadState(false);
    })
    .catch((error) => {
      console.log("El error es:", error)
    })
  }

  return (
    <Fade direction="left">
      <div className="card-container">
        <h2 className="">{title}</h2>
        <div className="container">
          <div className="cards d-flex flex-column flex-md-row flex-wrap w-100">
            {isLoading ? (
              <>
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
              </>
            ) : datos.length == 0 ? (
              <div className="py-3 px-5 bg-secondary d-flex align-items-center justify-content-center rounded text-light">
                <span> No hay información agregada </span>
              </div>
            ) : (
              datos.map((dato) => (
                <Card
                  title={dato.title}
                  content={dato.content}
                  imageUrl={dato.imageUrl}
                  cardId={dato.cardId}
                  key={dato.cardId}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export const fetchEvents = async (type = 'Evento') => {
  try {
      const response = await axios.get(
      `https://back-api-fofb.onrender.com/api/articles/getArticlesBy/${type}`
      );

      const eventos = []
 
      response.data.forEach((evento) => {
        eventos.push(new Article(
          evento.titulo,
          evento.descripcion,
          evento.imagen? evento.imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAVFBMVEXy8vJmZmbz8/P4+Pi/v7/7+/tra2tSUlKoqKhXV1f///9hYWFdXV3u7u7g4ODl5eWxsbF2dna3t7eBgYHV1dWhoaGNjY2Tk5NwcHDKysqampqHh4do7M82AAAE/UlEQVR4nO2abZeyIBCGdQZaA0QR1NT//z8f0GorqUzU9jzH+8OebSW5doZ5QYyiPy34NsAb7Xxh2vnCtPOFaecL084Xpp0vTDtfmHa+MO18Ydr5wrTzhWnnC9POF6ZP+ACX0vRZJ4+EiGZ5sozyDBfniyg5/iykoyB0aT7IYlGSZVSKOJs48WQ+JMeaLbT8WH0kEz38CV8y1Snv5qTJOnwfxN1LrcVHd75H/c98ADN5t+EDp1khswUfYJp3uiLRDCNuwYcmFpxzoeSf5IOM89iJq88NuD4fYD3gxfEx908FSCn6778BX6bOeDHvvLeFqClbkn6LT8ZXPu2BsD7vjpwflbdP2cJ+h1d8EKEWw+r0zbBFfHSX9SdKz1RYiOvV8RQb8GFzvMSHx4UoL1dj0YxJNvBvhLlwFuTcMz+k+mJdCzh2/xb+BWyUEEKbsf+AleKKF/N6VKc3qb82v2UyZb7Fd/X9sACKx75no/7AZRHP921s8/hO5it8z+6IrbjH4+rhi1/lo7k43PP1Seb2q9/jsw6XD87tLXgf5F+0H4D28R3Sv2E/O7UY47kkg3eDvsWHxmO9fgmSmzy5Fd8o8QLET/jiWP4SbbU/itL0vnpA/RSPq9+hG9UPok8qSW9sSIl38Q2yffZl5Db7t/rHravD77NGb2q5WYLmMnKL/gXOVYKfLv2VP7XcejjdjC+i1xaFq8GCgMXxFZ41YM024rPO/V1pPO4B4Vlq+dXPmWptPojusnBvQYzUW774MKyFlfmAlveetGsQR12LT1z3Mbwu37iBsl1+hvKx6/NJ9Jv5VfkAPSXWupiaSYAuyazJB1j6wpQfJJPPi9vNP2I7mdX4XJLzNygWcJqLecvWtB/NnyU562Jm3uLZOmcQV+N7jNw7QJ7RbIKLY8nWOv+wm/IX87o0Y05vAXm1ln/ZS7wekE4IEkHydfje4PWljo52v55htViBT0woYPwk2RQX8xX4Jqz8Sx58qzXsN4nP5UH6vpP5mv1cHpTvhy7PB3JCfzLo502faiWmnppMP7uwXctEC74VF+3UFyQ+eNMDCnVYRqqYfKbzydkP0qU0+fWS/+r9oW9oJh+MfllJs/ncCr99PgRzDoKnTDTze9L26ZDdnM3cfVhMs+2nEwQs3HbsfAvMExxu+PCU/0t8CqKeD85eBin7NxLOXr/+fFwIG/F1SYGODyRpBpQsRZmSBjNi95AoiXGnI6TJJOBlzJZ8mU6p5TOKlK5aWWcXTGtSdy3RhBrd6AKjOilUglI37ZNT9tX4NJSN5WOVobR/R8LxKUMjjmhqVhoqO2YqxsoE7Rj0nWKvyhdJzYoc7LxYuuON3n4S0hOCqW3s0KZjeY7YlKjs1WrGex5BfCl2WZFbOwLm1pNwz4emVR0rif2lBFVV1Zz3UAL5TE3yVNswTkZ8rFAmqwa+Fk6MUjYvQAL4ALuycP6FthnxKYl2/RVn/9pIzrOZEwXwEV64+GDuEfQDn90JN5oZ7eKDVg0DtWl8RFHn6psqUKqk6nOH4+ssn7J8LSX2zyeDbdXqEjNV6qkbjqX4UlcUUuvc1MhhaaVp5B7QOzvZi9LYhG0vZta/6MbMmyagfzkfnsO14g5lJLoUOSup0ki55DO7wIWV7xedQP8Jm04XQW/9rtxfos0+QTdYmQ9C29b/dP+xmXa+MO18Ydr5wrTzhWnnC9Of5/sHTG5KJQdeMFEAAAAASUVORK5CYII=",
          evento._id
        ));
      })

      return eventos;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

export class Article {
  constructor(title, content, imageUrl, cardId) {
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
    this.cardId = cardId;
  }
}


export default CardContainer;
