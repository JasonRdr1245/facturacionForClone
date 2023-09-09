import mongoose from "mongoose";
export type CompanyDocument = Document & mongoose.Document;
export declare class Company {
    _id?: string;
    name: string;
    ruc: string;
    typeDocument: string;
    adress: string;
    state: string;
    condition: string;
    district: string;
    province: string;
    departament: string;
    img?: string;
}
export declare const CompanySchema: mongoose.Schema<Company, mongoose.Model<Company, any, any, any, mongoose.Document<unknown, any, Company> & Company & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Company, mongoose.Document<unknown, {}, Company> & Company & Required<{
    _id: string;
}>>;
