import Articulo from "../modelos/articulosModelo.js";
import asyncHandler from "express-async-handler";


const postArticle = asyncHandler(async (req, res) => {
  const { titulo, descripcionBreve, descripcion, imagen, categoria } = req.body;

  if (!titulo || !descripcionBreve || !descripcion || !imagen || !categoria) {
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

const deleteArticles = asyncHandler(async (req, res) => {
  const article = await Articulo.findById(req.params.id);

  if (!req.user) {
    res.status(400).json({ msg: `no user find` });
  }
  if (!article) {
    res.status(400).json({ msg: `No articles with id: ${req.params.id}` });
  }
  if (article.user.toString() == !article.user.id) {
    res.status(400).json({ msg: `unauthorized` });
  }
  await article.deleteOne();
  res.status(200).json({ msg: `user deleted` });
});

const getArticles = asyncHandler(() => {
  const articulos = Articulo.find().lean()
  try {
    if (!articulos.length) {
      res.status(201).json({msg: `no existen registro`})
    }
    return res.status(200).json({
      articulos
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: `error en la consulta`})
  }
});

const updateArticle = asyncHandler(async (req, res) => {
  const { titulo, descripcionBreve, descripcion, imagen, categoria } = req.body;
  const articleId = req.params.id;

  if (!titulo || !descripcionBreve || !descripcion || !imagen || !categoria) {
    res.status(400).json({ msg: "Error al actualizar el artículo. Campos incompletos." });
    return;
  }
  
  try {
    const updatedArticle = await Articulo.findByIdAndUpdate(
      articleId,
      {
        titulo,
        descripcionBreve,
        descripcion,
        imagen,
        categoria,
      },
      { new: true }
    );

    if (!updatedArticle) {
      res.status(404).json({ msg: `No se encontró el artículo con ID: ${articleId}` });
      return;
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error en la actualización del artículo" });
  }
});

const controladorUser = {
  postArticle,
  deleteArticles,
  getArticles,
  updateArticle
};

export default controladorUser;
