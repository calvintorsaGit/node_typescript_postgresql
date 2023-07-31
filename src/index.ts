import express, {Application} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import {notFound, errorHandler} from './middlewares/ErrorMiddleware';
import timeout from 'connect-timeout'

const app: Application = express();
import authRoutes from "./routes/AuthRoutes";
import userRoutes from "./routes/UserRoutes";

dotenv.config();

connectDB()

app.use(express.json())
app.use(timeout('8s')); //set 8s timeout for all requests

// Auth Route
app.use("/api/auth/", authRoutes);
// User Route
app.use("/api/user/", userRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));

