import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";



export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (value: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String,
        default: null,
    },
},{ timestamps: true,toJSON: {
      transform: (doc, ret) => {
        if (ret) {
          delete (ret as any).password;
        }
        return ret;
      },
    } })
    
// middleware whihch works before saving to mongodb 
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 12);

    next()
})

userSchema.methods.comparePassword = async function (value: string) {
    return await bcrypt.compare(value, this.password);
}

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;