import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Product } from "src/product/entities/product.entity";


export class ProductForDetail {
    @Prop({unique:false,required:true})
    name:string;
}

@Schema()
export class Detail {
    @Prop({ required: true})
    product: ProductForDetail;
    @Prop({ required: true })
    amount: number;
    @Prop({ required: true })
    totalPrice: number;
    @Prop({ required: true })
    igvImportDetail: number;
    // @Prop({required:false,type:mongoose.Schema.Types.ObjectId,ref:'Factura'})
    // Factura: Factura
}
export const DetailSchema = SchemaFactory.createForClass(Detail)