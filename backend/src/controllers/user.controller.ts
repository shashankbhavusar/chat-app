import { Request, Response } from "express";
import { HTTPSTATUS } from "../configs/http.config";
import { getUsersService } from "../services/user.service";
import asyncHandler from "../middleware/asyncHandler.middleware";

export const getUsersController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as any)?._id;

    const users = await getUsersService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Users retrieved successfully",
      users,
    });
  }
);
