import { Router } from "express"
const router = Router();
import controladorUser from "../controladores/controladorArticulo";
import protect from "../middleware/authMiddleware";

router.route("/Articulos").post(protect, controladorUser.postArticle)

export default router;