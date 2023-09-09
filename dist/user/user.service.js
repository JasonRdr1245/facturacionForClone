"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const bcryptjs = require("bcryptjs");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const company_entity_1 = require("../company/entities/company.entity");
let UserService = class UserService {
    constructor(companyModel, userModel, http) {
        this.companyModel = companyModel;
        this.userModel = userModel;
        this.http = http;
    }
    async create(createUserDto) {
        try {
            const { password, ruc, ...userData } = createUserDto;
            const company = await this.getRuc(ruc).toPromise();
            const companyData = company.data;
            const companyObject = {
                name: companyData.nombre,
                ruc: companyData.numeroDocumento,
                typeDocument: companyData.tipoDocumento,
                adress: companyData.direccion || "desconocido",
                state: companyData.estado,
                condition: companyData.condicion,
                district: companyData.distrito || "desconocido",
                province: companyData.provincia || "desconocido",
                departament: companyData.departamento || "desconocido"
            };
            const dataBaseCompany = await this.companyModel.findOne({ ruc: companyObject.ruc });
            if (dataBaseCompany === null) {
                const dataBaseCompany = new this.companyModel(companyObject);
                await dataBaseCompany.save();
            }
            const { _id, ...companyRest } = dataBaseCompany.toJSON();
            const newUser = new this.userModel({
                password: bcryptjs.hashSync(password, 10),
                ...userData,
                company: _id,
            });
            await newUser.save();
            const { password: _, ...user } = newUser.toJSON();
            return user;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`data already exist`);
            }
            if (error.response.message === 'ruc no valido') {
                throw new common_1.BadRequestException('ruc no valido');
            }
        }
    }
    findAll() {
        try {
            return this.userModel.find().select('name surname email company');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Something terrible was happend');
        }
    }
    async findUserById(id) {
        const user = await this.userModel.findById(id);
        const { password, ...rest } = user.toJSON();
        return rest;
    }
    getRuc(ruc) {
        const headers = new Headers({
            'Authorization': 'Bearer apis-token-5375.SEvLxH2oeGoCybQpTerv-hU-OGk6fvFz'
        });
        return this.http.get(`https:api.apis.net.pe/v1/ruc?numero=${ruc}`, { headers: { 'Authorization': 'Bearer apis-token-5375.SEvLxH2oeGoCybQpTerv-hU-OGk6fvFz' } })
            .pipe((0, rxjs_1.map)((response) => {
            return {
                ...response,
                data: response.data
            };
        }), (0, rxjs_1.catchError)((error) => {
            throw new common_1.BadRequestException('ruc no valido');
        }));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_entity_1.Company.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        axios_1.HttpService])
], UserService);
//# sourceMappingURL=user.service.js.map