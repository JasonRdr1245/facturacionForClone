import mongoose from "mongoose";
import { Client } from "src/client/entities/client.entity";
import { Company } from "src/company/entities/company.entity";
import { Detail } from "src/detail/entities/detail.entity";
import { Pay } from "src/pay/entities/pay.entity";
import { User } from "src/user/entities/user.entity";
export declare class Facture {
    _id?: string;
    factureState: string;
    totalPayments: number;
    totalPriceNet: number;
    totalPrice: number;
    totalIgv: number;
    amountPayments: number;
    payMethod: string;
    detail: Detail[];
    user: User;
    company: Company;
    pay: Pay[];
    client: Client;
    date: Date;
}
export declare const FactureSchema: mongoose.Schema<Facture, mongoose.Model<Facture, any, any, any, mongoose.Document<unknown, any, Facture> & Facture & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Facture, mongoose.Document<unknown, {}, Facture> & Facture & Required<{
    _id: string;
}>>;
