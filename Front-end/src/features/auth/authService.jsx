import axios from "axios";
import {toast} from "react-toastify"

const API_URL = "https://back-api-fofb.onrender.com/api/users/login";

const login = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    toast.error("Credenciales incorrectas")
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = { login, logout };

export default authService;
