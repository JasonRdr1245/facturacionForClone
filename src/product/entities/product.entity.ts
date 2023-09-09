import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type ProductDocument = Document & mongoose.Document

@Schema()
export class Product {
    _id?:string;
    @Prop({ required: true ,unique:true})
    name: string;
    @Prop({ required: true, enum: ['grueso', 'docena', 'kg', 'unidad', 'metro', 'tonelada', 'mediadocena'] })
    unit: string;
    @Prop({required:false})
    img?: string;
    @Prop({ required: true })
    unitPrice: number;
    @Prop({ required: true })
    descripcion: string;
    @Prop({ required: true, enum: ['producto_primera_necesidad', 'materia_Prima', 'consumible', 'tecnologia', 'electrodomestico', 'ropa'] })
    tipoProducto: string;
    @Prop({ default: true })
    igvIndicator: boolean;
    @Prop({required:true})
    igv: number;
}


export const ProductSchema = SchemaFactory.createForClass(Product)
