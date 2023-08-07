import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';

type CustomRequest = Response & {token: string}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x_auth-token");

    if (!token) {
        return res.status(403).send({message:"A token is required for authentication"});
    }
    try {
        (req as unknown as CustomRequest).token = jwt.verify(token, process.env.JWT_SECRET).toString();
    } catch (err) {
        return res.status(401).send({message: "Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;
