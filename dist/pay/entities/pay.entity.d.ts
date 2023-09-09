import mongoose from "mongoose";
export declare class Pay {
    import: number;
    payDate: Date;
}
export declare const PaySchema: mongoose.Schema<Pay, mongoose.Model<Pay, any, any, any, mongoose.Document<unknown, any, Pay> & Pay & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Pay, mongoose.Document<unknown, {}, Pay> & Pay & {
    _id: mongoose.Types.ObjectId;
}>;
