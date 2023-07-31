import jwt, {JwtPayload} from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';
import CustomRequest = Express.CustomRequest;

declare namespace Express {
    export interface CustomRequest extends Request {
        token: string | JwtPayload;
    }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        (req as CustomRequest).token = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).send({message: "Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;
