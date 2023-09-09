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
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { Company } from 'src/company/entities/company.entity';
export declare class UserService {
    private companyModel;
    private userModel;
    private readonly http;
    constructor(companyModel: Model<Company>, userModel: Model<User>, http: HttpService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }>)[], import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }>, {}, User, "find">;
    findUserById(id: string): Promise<{
        _id: string;
        email: string;
        name: string;
        surname: string;
        company?: import("mongoose").FlattenMaps<Company>;
    }>;
    getRuc(ruc: number): Observable<any>;
}
