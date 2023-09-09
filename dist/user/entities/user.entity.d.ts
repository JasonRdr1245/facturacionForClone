import mongoose from "mongoose";
import { Company } from "src/company/entities/company.entity";
export type UserDocument = User & mongoose.Document;
export declare class User {
    _id?: string;
    email: string;
    name: string;
    surname: string;
    password?: string;
    company?: Company;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User> & User & Required<{
    _id: string;
}>>;
