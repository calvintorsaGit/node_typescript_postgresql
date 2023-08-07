import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import User from "../Model/User";

// @Desc Get all users
// @Route /api/user
// @Method GET
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const allUser: User[] = await User.findAll();
    res.status(200).json(allUser);
})

// @Desc Get user by email
// @Route /api/user/findUser
// @Method GET
export const getUserByEmail = asyncHandler(async (req: Request, res: Response) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({rejectOnEmpty: true, where: {email: email}});
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({message: "User not found"})
    }
})


// @Desc create user with name, email, password
// @Route /api/user/createUser
// @Method POST
export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    const findUser = await User.findOne({rejectOnEmpty: false, where: {email: email}});
    if (!findUser) {
        const user = await User.create({name, email, password});
        res.status(200).json(user);
    } else {
        res.status(400).json({success: false, message: `${email} is registered`});
    }
})

// @Desc update user name or password
// @Route /api/user/updateUser
// @Method PUT
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const {email, updatedName, updatedPassword} = req.body;
    const updatedValue = {};

    if (updatedName === undefined && updatedPassword === undefined) {
        res.status(400).json({
            success: false,
            message: `updatedName & updatedPassword cannot be empty`
        });
    }

    if (updatedName !== undefined) updatedValue['name'] = updatedName;
    if (updatedPassword !== undefined) updatedValue['password'] = updatedPassword;

    const result = await User.update(
        {...updatedValue},
        {returning: true, where: {email: email}}
    )

    try {
        const data = result[1][0].get();
        res.status(200).json({success: true, data});
    } catch (e) {
        res.status(400).json({success: false, message: 'Failed to update, email not found'});
    }
})

// @Desc DELETE user with email parameter
// @Route /api/user/deleteUser
// @Method DELETE
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const {email} = req.body;
    const result = await User.destroy({
        where: {
            email: email
        }
    })
    if (result) {
        res.status(200).json({success: true, message: `${email} successfully deleted`});
    } else {
        res.status(400).json({success: false, message: 'Failed to delete, email not found'});
    }
})
