import "dotenv/config";

import connectDatabase from "../configs/database.config";
import UserModel from "../models/user.model";

const createAI = async () => {
    let AI = await UserModel.findOne({ isAI: true });
    if(AI){
        console.log("AI already exists");
        return AI
    }
    AI = await UserModel.create({
        name: "ChitChat AI",
        isAI: true,
        avatar: "https://res.cloudinary.com/dl77yavd9/image/upload/v1702050867/chit-chat-app/ai-avatar_ajh8s9.png",
    });
    console.log("AI created successfully");
    return AI;
}

const seedAI = async () => {
    try {
        await connectDatabase();
        await createAI();
        console.log("Seeding completed");
        process.exit(0);
    }catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
}

seedAI()