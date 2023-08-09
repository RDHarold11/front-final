import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()

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
        onClick={() => document.querySelector('#navbarSupportedContent').classList.toggle('show')}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex flex-column align-items-center flex-lg-row">
          <li className="nav-item my-2 my-lg-0">
            <a className="nav-links" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <a className="nav-links" href="">
              Eventos
            </a>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <a className="nav-links" href="">
              Anuncios
            </a>
          </li>
          { !user? 
            <li className="nav-item my-2 my-lg-0">
                <Link to="/login">Ingresar</Link>
            </li> 
            : 
            <>
              <li className="nav-item my-2 my-lg-0">
                <Link to="panel" className="nav-links">Panel</Link>
              </li>  
              <li className="nav-item my-2 my-lg-0">
                  <Link to="/" className="nav-links" onClick={() => {dispatch(logout())}}>Logout</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
