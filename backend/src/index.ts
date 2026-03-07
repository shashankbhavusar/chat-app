import "dotenv/config";
import cookieParser from "cookie-parser";
import { Env } from "./configs/env.config";
import asyncHandler from "./middleware/asyncHandler.middleware";
import { Request, Response } from "express";
import { HTTPSTATUS } from "./configs/http.config";
import routes from "./routes";
import passport from "passport";
import { errorHandler } from "./middleware/errorHandler.middleware";
import http from 'http'
import { initializeSocket } from "./lib/socket";
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app = express();

const server = http.createServer(app);

//socket
initializeSocket(server);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
}))
app.use(passport.initialize());


// all routes will come here 
app.use('/api', routes);

app.get('/', asyncHandler(async(req:Request, res:Response)=>{
    res.status(HTTPSTATUS.OK).json({message: "Welcome to the Chat App API"});
}))

app.use(errorHandler);


const connectMongo = async () => {
    try {
        await mongoose.connect(Env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }      
}

const startServer = async () => {
    await connectMongo();
    server.listen(Env.PORT, () => {
        console.log(`Server is running on port ${Env.PORT}`)
    })
}

startServer();