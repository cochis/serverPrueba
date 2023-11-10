import { ObjectId } from "mongoose";
export interface IUser {
    userCode: number;
    name: string;
    email: string;
    birthdate: Date;
    role?: ObjectId;
    deleted: boolean;
}
