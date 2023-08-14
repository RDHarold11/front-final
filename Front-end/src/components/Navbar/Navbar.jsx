import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{backgroundColor: "#E74646"}}>
      <img
        src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block align-text-top p-1"
      />
      <a className="navbar-brand" href="/">
        Fe y Alegria
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
        <ul className="navbar-nav d-flex flex-column justify-content-lg-between align-items-center flex-lg-row w-100">
          <div className="d-flex flex-column flex-lg-row">
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
          </div>
          <div className="d-flex justify-content-between">
          { !user? 
            <li className="nav-item my-2 my-lg-0">
                <Link to="/login" className="nav-links">Ingresar</Link>
            </li> 
            : 
            <>
              <li className="nav-item my-2 my-lg-0">
                <Link to="/panel" className="nav-links">Panel</Link>
              </li>  
              <li className="nav-item my-2 my-lg-0">
                  <Link to="/" className="nav-links" onClick={() => {dispatch(logout())}}>Logout</Link>
              </li>
            </>
          }
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
