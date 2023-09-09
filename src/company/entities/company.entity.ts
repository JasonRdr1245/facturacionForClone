import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type CompanyDocument=Document & mongoose.Document

@Schema()
export class Company {
    _id?:string;
    @Prop({required:true})
    name: string;
    @Prop({required:true,unique:true})
    ruc: string;
    @Prop({default:6})
    typeDocument: string;
    @Prop({required:true})
    adress: string;
    @Prop({required:true})
    state: string;
    @Prop({required:true})
    condition: string;
    @Prop({required:true})
    district: string;
    @Prop({required:true})
    province: string;
    @Prop({required:true})
    departament: string;
    @Prop({required:false})
    img?: string;
}

export const CompanySchema=SchemaFactory.createForClass(Company)
