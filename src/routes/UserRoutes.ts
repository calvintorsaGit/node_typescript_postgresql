import express from 'express';
import { login, register, getAll } from '../controllers/UserController';

const userRoutes = express.Router();

userRoutes.route("/").get(getAll).post(login);
userRoutes.post("/register", register);

export default userRoutes;
