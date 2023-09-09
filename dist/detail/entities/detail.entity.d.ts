import mongoose from "mongoose";
export declare class ProductForDetail {
    name: string;
}
export declare class Detail {
    product: ProductForDetail;
    amount: number;
    totalPrice: number;
    igvImportDetail: number;
}
export declare const DetailSchema: mongoose.Schema<Detail, mongoose.Model<Detail, any, any, any, mongoose.Document<unknown, any, Detail> & Detail & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Detail, mongoose.Document<unknown, {}, Detail> & Detail & {
    _id: mongoose.Types.ObjectId;
}>;
