import Card from "../Card/card";
import "./card-container.css";
import { Fade } from "react-awesome-reveal";

function AnunciosContainer() {
  let relleno =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam corrupti iusto quam doloribus obcaecati distinctio";

  let datos = [
    {
      title: "Prueba#1",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/edificio-escolar-institucion-educativa-universidad_107791-1051.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10,
    },
    {
      title: "Prueba#2",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-escuela-secundaria_114360-8329.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10,
    },
    {
      title: "Prueba#3",
      content: relleno,
      imageUrl:
        "https://img.freepik.com/vector-gratis/edificio-universitario-banner-institucion-educativa_1441-3616.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10,
    },
    {
      title: "Prueba#4",
      content: "Limpieza general de las aulas de clases",
      imageUrl:
        "https://img.freepik.com/vector-gratis/aula-vacia-interior-escuela-o-clase-universitaria_107791-631.jpg?size=626&ext=jpg&ga=GA1.1.2061922915.1687553520&semt=ais",
      cardId: Math.random() * 10,
    },
  ];
  return (
    <Fade direction="left">
      <div className="card-container">
        <h2>Anuncios importantes</h2>
        <div className="container">
          <div className="cards d-flex flex-column flex-md-row flex-wrap ">
            {datos.length == 0 ? (
              <p>No hay información agregada</p>
            ) : (
              datos.map((dato) => (
                <>
                  <Card
                    title={dato.title}
                    content={dato.content}
                    imageUrl={dato.imageUrl}
                    cardId={dato.cardId}
                  />
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AnunciosContainer;
