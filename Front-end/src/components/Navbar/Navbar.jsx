import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-dark px-3">
      <img
        src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block align-text-top p-1"
      />
      <a className="navbar-brand" href="/">
        Escuela Prueba
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item ms-auto">
            <a className="nav-links" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item mx-auto">
            <a className="nav-links" href="">
              Eventos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="">
              Anuncios
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <button type="submit" className="btn ">
          <Link to="/login">Ingresar</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
