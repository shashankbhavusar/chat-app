import express from "express";
import { authStatusController, loginController, logoutController, registerController } from "../controllers/auth.controller";
import { passportAuthenticateJwt } from "../configs/passport.config";


const authRouters = express.Router();


authRouters
    .post('/register', registerController)
    .post('/login', loginController)
    .post('/logout', logoutController)
    .get('/status', passportAuthenticateJwt ,authStatusController)

export default authRouters;