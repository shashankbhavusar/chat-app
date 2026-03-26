import mongoose, { Document, Schema } from "mongoose";

export interface IChat extends Document {
    participants: mongoose.Types.ObjectId[]; // Array of user IDs
    lastMessage: mongoose.Types.ObjectId;
    isGroup:boolean;
    groupName?: string;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    isAiChat: boolean;
}

const chatSchema = new Schema<IChat>({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
    },
    isGroup: {
        type: Boolean,
        default: false,
    },
    groupName: {
        type: String,
        trim: true, 
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    isAiChat: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


chatSchema.pre('save', async function (next){
    if(this.isNew){
        const User = mongoose.model('User')
        const participants = await User.find({
             _id: { $in: this.participants },
         isAI: true }
        )
        if(participants.length > 0){
            this.isAiChat = true;
        }
        next();
    }
})

const chatModel = mongoose.model<IChat>('Chat', chatSchema);

export default chatModel;