import { NextFunction, Request, Response } from "express";

type AsyncController = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<any>;

const asyncHandler = (controller:AsyncController) => 
    async(req:Request, res:Response, next?:NextFunction)=>{
        try {
            await controller(req, res, next);
        } catch (error) {
            next && next(error);
        }
}

export default asyncHandler;