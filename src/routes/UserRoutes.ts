import express from 'express';
import {getUsers, getUserByEmail, createUser, updateUser, deleteUser} from '../controllers/UserController';


const userRoutes = express.Router();

userRoutes.route("/").get(getUsers);
userRoutes.route("/findUser").get(getUserByEmail);
userRoutes.route("/createUser").post(createUser);
userRoutes.route("/updateUser").put(updateUser);
userRoutes.route("/deleteUser").delete(deleteUser);

export default userRoutes;
