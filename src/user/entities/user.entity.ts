import { Prop, SchemaFactory,Schema} from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Company } from "src/company/entities/company.entity";



export type UserDocument=User & mongoose.Document


@Schema()
export class User {
    _id?: string;
    @Prop({required:true,unique:true})
    email:string;
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    surname:string;
    @Prop({required:true})
    password?:string;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Company',required:true})
    company?:Company;
}

export const UserSchema=SchemaFactory.createForClass(User)
