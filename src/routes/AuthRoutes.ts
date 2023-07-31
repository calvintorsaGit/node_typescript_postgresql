import express from 'express';
import {login, registerUser} from '../controllers/AuthController';

const authRoutes = express.Router();

authRoutes.route("/login").get(login)
authRoutes.route("/register").get(registerUser)

export default authRoutes;
