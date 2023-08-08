import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './articulo.css'

const Articulo = () => {
  return (
    <>
    <Navbar/>
    <div className="uacontainer">
      <div className="auimage">
        <img src="https://img.freepik.com/vector-gratis/fondo-azul-memphis-medios-tonos-elementos-linea_1017-33622.jpg?w=2000&t=st=1690479920~exp=1690480520~hmac=708bb1c3401f3bdc50d9d19faf648f27582bef44f1bba4d04935a6c228bf4551" alt="" />
      </div>
      <section className="uaSection">
        <h1 className="titulounico">TITULO</h1>
        <h2 className="titulounico">DESCRIPCION</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className="titulounico">DIRECTOR</h2>
        <p>Lorem, ipsum dolor.</p>
      </section>
      <div className="bottomText">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          itaque voluptatum ut beatae ab, nesciunt temporibus quo atque
          explicabo aliquid, vero eum accusantium eligendi obcaecati tempora ea
          autem quas velit!
        </p>
      </div>
    </div>
    </>
  );
};

export default Articulo;
