import Usuario from "../modelos/usuarioModelo.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

/* const regiterUser = asyncHandler(async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) {
    res.status(400).json({ msg: "Datos faltantes" });
  }

  const userExits = await Usuario.findOne({ user: user });
  if (userExits) {
    res.status(400).json({ msg: "Este usuario ya existe" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userModel = await Usuario.create({
    user,
    password: hashedPassword,
  });

  if (userModel) {
    res.status(200).json({
      _id: userModel.id,
      user: userModel.user,
      token: generateToken(userModel.id),
    });
  }
});
 */
//Para generar el token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const loginUser = asyncHandler(async (req, res) => {
  const { user, password } = req.body;

  const User = await Usuario.findOne({ user: user });
  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User.id,
      user: User.user,
      token: generateToken(User.id),
    });
  } else {
    res.status(400).json({ msg: "Invalid credentials" });
  }
});

const controlador = {
  loginUser,
};

export default controlador;
