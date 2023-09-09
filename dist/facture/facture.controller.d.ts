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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
export declare class FactureController {
    private readonly factureService;
    constructor(factureService: FactureService);
    create(createFactureDto: CreateFactureDto, req: Request): Promise<{
        company: import("mongoose").Document<unknown, {}, import("../company/entities/company.entity").Company> & import("../company/entities/company.entity").Company & Required<{
            _id: string;
        }>;
        detail: import("../detail/entities/detail.entity").Detail[];
        user: {
            _id?: string;
            email: string;
            name: string;
            surname: string;
            password?: string;
        };
        client: import("../company/entities/company.entity").Company;
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
    findOne(id: string): string;
    update(id: string, updateFactureDto: UpdateFactureDto): string;
    remove(id: string): string;
}
