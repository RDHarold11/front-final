import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

import usuarioRoutes from "../server/routes/usuarioRoutes.js";

//Llamar la conexcion a la bd aqui

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
