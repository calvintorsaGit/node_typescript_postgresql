import jwt from "jsonwebtoken";

const generateToken = (email: string) => {
    return jwt.sign({email}, process.env.JWT_SECRET as string, {
        expiresIn: "1 days",
    });
};

export default generateToken;
