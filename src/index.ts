import express, {Application, Request, Response} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import {notFound, errorHandler} from './middlewares/ErrorMiddleware';

const app: Application = express();
import userRoutes from "./routes/UserRoutes";

dotenv.config();

connectDB();

// User Route
app.use("/api/auth", userRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);
