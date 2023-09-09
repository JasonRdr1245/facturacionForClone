import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Client } from "src/client/entities/client.entity";
import { Company } from "src/company/entities/company.entity";
import { Detail } from "src/detail/entities/detail.entity";
import { Pay } from "src/pay/entities/pay.entity";
import { User } from "src/user/entities/user.entity";

@Schema()
export class Facture {
    _id?: string;
    @Prop({required:true,enum:['cancelado','activa'],default:'activa'})
    factureState: string;
    @Prop({required:true,default:1})
    totalPayments: number;
    @Prop({required:true})
    totalPriceNet:number;
    @Prop({required:true})
    totalPrice:number;
    @Prop({required:true})
    totalIgv:number;
    @Prop({required:true})
    amountPayments: number;
    @Prop({required:true,enum:['credito','contado' ],default:'contado'})
    payMethod: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detail' }] })//poner unique true pss
    detail: Detail[]
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
    company: Company;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pay' }] })
    pay: Pay[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
    client:Client;
}

export const FactureSchema = SchemaFactory.createForClass(Facture)
