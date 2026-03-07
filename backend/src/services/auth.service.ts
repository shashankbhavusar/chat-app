import UserModel from "../models/user.model";
import { LoginSchemaType, RegisterSchemaType } from "../validators/auth.validator";


export const registerService = async(body:RegisterSchemaType)=>{
    const { name, email, password, avatar} = body;

    const isUserExists = await UserModel.findOne({ email });
    if(isUserExists) throw new Error("User already exists");

    const newUser =  new UserModel({ name, email, password, avatar });
    await newUser.save();

    return newUser;

}

export const loginService = async(body:LoginSchemaType)=>{
    console.log("Login service called with body:", body);
    const { email, password} = body;

    const user = await UserModel.findOne({ email });
    if(!user) throw new Error("User does not exist");

    const isPasswordMatch = await user.comparePassword(password);
    if(!isPasswordMatch) throw new Error("Invalid credentials");

    return user;

}