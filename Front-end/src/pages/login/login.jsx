import { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { user:username, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    if (!user || !password) {
      alert("Campos vacios");
    } else {
      const userData = { user, password };
      dispatch(login(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (username) {
      navigate("/");
    }
    dispatch(reset());
  }, [username, dispatch, isError]);
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
          onSubmit={onSubmit}
          id="form-login"
          className="d-flex flex-column align-items-center p-2"
        >
          <h2 className="w-100 text-center">Inicio de sesión administrador</h2>

          <div className="mb-2">
            <label className="form-label" htmlFor="userName"></label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="form-control"
              id="userName"
              placeholder="Ingrese nombre de usuario"
            />
          </div>

          <div className="mb-2">
            <label className="form-label" htmlFor="contra"></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
