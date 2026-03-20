import { Request, Response } from "express";
import { sendMessageSchema } from "../validators/message.validator";
import { HTTPSTATUS } from "../configs/http.config";
import { sendMessageService } from "../services/message.service";
import asyncHandler from "../middleware/asyncHandler.middleware";
import { UserDocument } from "../models/user.model";

export const sendMessageController = asyncHandler (
  async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    const userId = user._id.toString();
    const body = sendMessageSchema.parse(req.body);

    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Message sent successfully",
      ...result,
    });
  }
);
