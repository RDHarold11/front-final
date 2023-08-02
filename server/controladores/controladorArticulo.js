import Articulo from "../modelos/articulosModelo.js";
import asyncHandler from "express-async-handler";

const postArticle = asyncHandler(async (req, res) => {

  const { user, titulo, descripcionBreve, descripcion, imagen, categoria } =
    req.body;

  if (
    !user ||
    !titulo ||
    !descripcionBreve ||
    !descripcion ||
    !imagen ||
    !categoria
  ) {
    res.status(400).json({ msg: "error al ingresar articulo" });
  }

  const article = await Articulo.create({
    user: req.user.id,
    titulo,
    descripcionBreve,
    descripcion,
    imagen,
    categoria,
  });
  res.status(200).json(article);
});

const controladorUser = {
  postArticle,
};

export default controladorUser;
