import jwt, {JwtPayload} from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';

export interface CustomRequest{
    token: string | JwtPayload;
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x_auth-token");

    if (!token) {
        return res.status(403).send({message:"A token is required for authentication"});
    }
    try {
        (req as CustomRequest).token = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).send({message: "Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;
