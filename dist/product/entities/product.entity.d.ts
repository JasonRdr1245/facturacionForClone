import mongoose from "mongoose";
export type ProductDocument = Document & mongoose.Document;
export declare class Product {
    _id?: string;
    name: string;
    unit: string;
    img?: string;
    unitPrice: number;
    descripcion: string;
    tipoProducto: string;
    igvIndicator: boolean;
    igv: number;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Product & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, Product> & Product & Required<{
    _id: string;
}>>;
