import { emitNewChatToParticpants } from "../lib/socket";
import ChatModel from "../models/chat.model";
import MessageModel from "../models/message.model";
import { BadRequestException } from "../utils/app-error";
import { findByIdUserService } from "./user.service";

export const createChatService = async(userId: string,
  body: {
    participantId?: string;
    isGroup?: boolean;
    participants?: string[];
    groupName?: string;
  }) => {

    const {participantId, isGroup, participants, groupName} = body;

    let chat;
    let allParticipants = [];
    if( isGroup && participants?.length ){
        allParticipants = [...participants, userId]
        
        chat = await ChatModel.create({
            participants: allParticipants,
            isGroup: true,
            groupName,
            createdBy: userId,
        })
    }else if(participantId){
        const otherUserId = await findByIdUserService(participantId);
        if(!otherUserId) throw new Error("User not found");
        allParticipants = [participantId, userId];

        const existingChat = await ChatModel.findOne({
            isGroup: false,
            participants: { $all: allParticipants, $size: 2 },
        }).populate("participants", "name avatar isAI");

        if(existingChat){
            return existingChat;
        }

        chat = await ChatModel.create({
            participants: allParticipants,
            isGroup: false,
            createdBy: userId,
        })
    }

      // Implement websocket
  const populatedChat = await chat?.populate(
    "participants",
    "name avatar isAI"
  );
  const particpantIdStrings = populatedChat?.participants?.map((p) => {
    return p._id?.toString();
  });

  emitNewChatToParticpants(particpantIdStrings, populatedChat);
    return chat;

}


export const getUserChatsService = async (userId: string) => {
  const chats = await ChatModel.find({
    participants: {
      $in: [userId],
    },
  })
    .populate("participants", "name avatar isAI")
    .populate({
      path: "lastMessage",
      populate: {
        path: "sender",
        select: "name avatar isAI",
      },
    })
    .sort({ updatedAt: -1 });
  return chats;
};

export const getSingleChatService = async (chatId: string, userId: string) => {
  const chat = await ChatModel.findOne({
    _id: chatId,
    participants: {
      $in: [userId],
    },
  }).populate("participants", "name avatar isAI");

  if (!chat)
    throw new BadRequestException(
      "Chat not found or you are not authorized to view this chat"
    );

  const messages = await MessageModel.find({ chatId })
    .populate("sender", "name avatar isAI")
    .populate({
      path: "replyTo",
      select: "content image sender",
      populate: {
        path: "sender",
        select: "name avatar isAI",
      },
    })
    .sort({ createdAt: 1 });

  return {
    chat,
    messages,
  };
};


export const validateChatParticipant = async (
  chatId: string,
  userId: string
) => {
  const chat = await ChatModel.findOne({
    _id: chatId,
    participants: {
      $in: [userId],
    },
  });
  if (!chat) throw new BadRequestException("User not a participant in chat");
  return chat;
};