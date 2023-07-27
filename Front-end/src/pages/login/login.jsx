import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  function enviar(e) {
    e.preventDefault();
  }

  return (
    <>
      <div
        id="Login-window"
        className="d-flex flex-wrap justify-content-center align-items-md-center"
      >
        {/* Formulario */}
        <div className="" id="img-form">
          <img
            src="https://images.pexels.com/photos/162622/facebook-login-office-laptop-business-162622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="login"
            className="w-100"
          />
        </div>
        <form
          action="#"
          onSubmit={enviar}
          id="form-login"
          className="d-flex flex-column align-items-center p-2"
        >
          <h2 className="w-100 text-center">Inicio de sesión administrador</h2>

          <div className="mb-2">
            <label className="form-label" htmlFor="userName"></label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Ingrese nombre de usuario"
            />
          </div>

          <div className="mb-2">
            <label className="form-label" htmlFor="contra"></label>
            <input
              type="password"
              className="form-control"
              id="contra"
              placeholder="Ingrese contraseña"
            />
          </div>

          <center className="w-100 p-2">
            <button className="btn btn-primary">Iniciar sesión</button>
          </center>
          <Link to="/">Volver</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
