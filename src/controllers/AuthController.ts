import {Request, Response} from 'express';
import User from "../Model/User";
import generateToken from "../utils/generateToken";

// @Desc Get all users
// @Route /api/auth
// @Method GET
export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({rejectOnEmpty: true, where: {email: email}});
        if (password === user.password) {
            const token = generateToken(email);
            return res.status(200).json({success: true, token: token});
        } else {
            return res.status(400).json({success: false, message: "Password Incorrect"})
        }
    } catch (e) {
        return res.status(400).json({message: "User not found"})
    }
}

// @Desc Get user by email
// @Route /api/register
// @Method GET
export const registerUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    try {
        const findUser = await User.findOne({rejectOnEmpty: false, where: {email: email}});
        if (findUser === undefined) {
            const user = await User.create({name, email, password});
            return res.status(200).json(user);
        } else {
            return res.status(400).json({message: 'email is registered'})
        }
    } catch (e) {
        return res.status(400).json({message: e})
    }
}



