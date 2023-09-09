import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Pay {
    @Prop({required:true})
    import:number;
    @Prop()
    payDate: Date;
}


export const PaySchema=SchemaFactory.createForClass(Pay)
