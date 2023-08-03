import axios from "axios";

const API_URL = "http://localhost:5500/api/user/login";

const login = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = { login, logout };

export default authService;
