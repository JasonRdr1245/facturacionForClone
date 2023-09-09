/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Company } from './../company/entities/company.entity';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { User } from 'src/user/entities/user.entity';
import { Model } from 'mongoose';
import { Facture } from './entities/facture.entity';
import { Detail } from 'src/detail/entities/detail.entity';
import { DetailService } from '../detail/detail.service';
import { UserService } from 'src/user/user.service';
import { Client } from 'src/client/entities/client.entity';
export declare class FactureService {
    private readonly companyModel;
    private readonly factureModel;
    private readonly clientModel;
    private readonly userService;
    private readonly detailService;
    constructor(companyModel: Model<Company>, factureModel: Model<Facture>, clientModel: Model<Client>, userService: UserService, detailService: DetailService);
    create(createFactureDto: CreateFactureDto, req: Request): Promise<{
        company: import("mongoose").Document<unknown, {}, Company> & Company & Required<{
            _id: string;
        }>;
        detail: Detail[];
        user: {
            _id?: string;
            email: string;
            name: string;
            surname: string;
            password?: string;
        };
        client: Company;
        _id?: string;
        factureState: string;
        totalPayments: number;
        totalPriceNet: number;
        totalPrice: number;
        totalIgv: number;
        amountPayments: number;
        payMethod: string;
        pay: import("../pay/entities/pay.entity").Pay[];
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFactureDto: UpdateFactureDto): string;
    remove(id: number): string;
    desestructDataFacture(facture: Facture): {
        _id?: string;
        factureState: string;
        totalPayments: number;
        totalPriceNet: number;
        totalPrice: number;
        totalIgv: number;
        amountPayments: number;
        payMethod: string;
        user: User;
        pay: import("../pay/entities/pay.entity").Pay[];
    };
}
