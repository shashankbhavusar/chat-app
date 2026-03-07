import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";
import { clearJwtAuthCookie, setJwtAuthCookie } from "../utils/cookie";
import { HTTPSTATUS } from "../configs/http.config";
import asyncHandler from "../middleware/asyncHandler.middleware";


export const registerController = asyncHandler(async (req:Request, res:Response)=>{
    const body = req.body;

    const user = await registerService(body);

    const userId = user._id.toString();
    return setJwtAuthCookie({ res, userId  }).status(HTTPSTATUS.CREATED).json({
        success: true,
        message: "User registered successfully",
        user,
    })
})

export const loginController = asyncHandler(async (req:Request, res:Response)=>{
    const body = req.body;

    const user = await loginService(body);

    const userId = user._id.toString();
    return setJwtAuthCookie({ res, userId  }).status(HTTPSTATUS.OK).json({
        success: true,
        message: "User logged in successfully",
        user,
    })
})

export const logoutController = asyncHandler(async (req:Request, res:Response)=>{
    return clearJwtAuthCookie(res).status(HTTPSTATUS.OK).json({
        success: true,
        message: "User logged out successfully",
    })
})

export const authStatusController = asyncHandler(async (req:Request, res:Response)=>{
    const user = req.user;  
    if(user){
        return res.status(HTTPSTATUS.OK).json({
            success: true,
            message: "User is authenticated",
            user,
        })
    }
    return res.status(HTTPSTATUS.UNAUTHORIZED).json({
        success: false,
        message: "User is not authenticated",
    })
})