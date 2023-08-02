import { Router } from "express";
const router = Router();
import controlador from "../controladores/controladorArticulo.js";
import protect from "../middleware/authMiddleware.js";

router.route("/").post(protect, controlador.postArticle);

export default router;
