import "./recientes.css";
import { Fade } from "react-awesome-reveal";

const Recientes = () => {
  return (
    <Fade direction="left">
      <div className="recentsContainer">
        <h1 className="titulo">RECIENTES</h1>
        <section className="w-100">
          <div>
            <img
              src="https://media.istockphoto.com/id/534575873/es/foto/maestra-con-sus-alumnos-en-el-aula.jpg?b=1&s=170667a&w=0&k=20&c=gDg4N-w36VCyF0kE68tfO8VUu6m42ACuYeTSUr4Yi5A="
              alt=""
            />
          </div>
          <div className="main__container w-100">
            <div className="first__section">
              <h2>01. Titulo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                molestias nisi consequatur eius, eligendi laboriosam enim! Sed
                corporis atque sapiente!
              </p>
              <button onClick={() => (window.location.href = "/detalles/:id")}>
                Leer más
              </button>
            </div>
            <hr />
            <div className="second__section">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_640.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2>02. Titulo</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta similique harum dolorem dolore animi cupiditate esse
                  possimus nemo sed doloribus.
                </p>
                <button
                  onClick={() => (window.location.href = "/detalles/:id")}
                >
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Recientes;
