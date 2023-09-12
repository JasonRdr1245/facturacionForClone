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
exports.FactureService = void 0;
const company_entity_1 = require("./../company/entities/company.entity");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const facture_entity_1 = require("./entities/facture.entity");
const detail_service_1 = require("../detail/detail.service");
const user_service_1 = require("../user/user.service");
const client_entity_1 = require("../client/entities/client.entity");
let FactureService = class FactureService {
    constructor(companyModel, factureModel, clientModel, userService, detailService) {
        this.companyModel = companyModel;
        this.factureModel = factureModel;
        this.clientModel = clientModel;
        this.userService = userService;
        this.detailService = detailService;
    }
    async create(createFactureDto, req) {
        try {
            const { ruc, ...rest } = createFactureDto;
            const client = await this.userService.getRuc(ruc).toPromise();
            const clientData = client.data;
            const clientObject = {
                name: clientData.nombre,
                ruc: clientData.numeroDocumento,
                typeDocument: clientData.tipoDocumento,
                adress: clientData.direccion || "desconocido",
                state: clientData.estado,
                condition: clientData.condicion,
                district: clientData.distrito || "desconocido",
                province: clientData.provincia || "desconocido",
                departament: clientData.departamento || "desconocido"
            };
            const dataBaseClient = await this.clientModel.findOne({ ruc: clientObject.ruc });
            if (dataBaseClient === null) {
                const dataBaseClient = new this.clientModel(clientObject);
                await dataBaseClient.save();
            }
            const { _id, ...clientRest } = dataBaseClient.toJSON();
            const user = req['user'];
            const { company, ...userObject } = user;
            const companyId = company;
            const companyObject = await this.companyModel.findById(companyId);
            var totalPrice = 0;
            var totalIgv = 0;
            var detailObjectContainer = [];
            for (const elem of createFactureDto.detail) {
                const detailObject = await this.detailService.findOne(elem);
                if (!detailObject) {
                    throw new common_1.BadRequestException('datos erroneos detail id');
                }
                detailObjectContainer.push(detailObject);
                totalIgv += detailObject.igvImportDetail;
                totalPrice += detailObject.totalPrice;
            }
            const totalPriceNet = totalPrice - totalIgv;
            const newFacture = await new this.factureModel({
                detail: createFactureDto.detail,
                company: companyId,
                totalPriceNet,
                totalIgv,
                totalPrice,
                user: userObject._id,
                client: _id,
                date: new Date()
            });
            if (createFactureDto.payMethod) {
                newFacture.payMethod = createFactureDto.payMethod;
            }
            if (createFactureDto.totalPayments) {
                newFacture.totalPayments = createFactureDto.totalPayments;
            }
            if (newFacture.totalPayments !== 1) {
                newFacture.amountPayments = newFacture.totalPrice / newFacture.totalPayments;
            }
            else {
                newFacture.amountPayments = newFacture.totalPrice;
            }
            const factureObject = this.desestructDataFacture(newFacture.toJSON());
            await newFacture.save();
            return {
                ...factureObject,
                company: companyObject,
                detail: detailObjectContainer,
                user: userObject,
                client: clientObject
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('algo en los datos ha fallado');
        }
    }
    findAll() {
        return `This action returns all facture`;
    }
    findOne(id) {
        return `This action returns a #${id} facture`;
    }
    update(id, updateFactureDto) {
        return `This action updates a #${id} facture`;
    }
    remove(id) {
        return `This action removes a #${id} facture`;
    }
    desestructDataFacture(facture) {
        const { company, client, detail, ...object } = facture;
        return object;
    }
};
exports.FactureService = FactureService;
exports.FactureService = FactureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_entity_1.Company.name)),
    __param(1, (0, mongoose_1.InjectModel)(facture_entity_1.Facture.name)),
    __param(2, (0, mongoose_1.InjectModel)(client_entity_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        user_service_1.UserService,
        detail_service_1.DetailService])
], FactureService);
//# sourceMappingURL=facture.service.js.map