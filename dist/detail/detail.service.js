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
exports.DetailService = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../product/product.service");
const detail_entity_1 = require("./entities/detail.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DetailService = class DetailService {
    constructor(detailModel, productService) {
        this.detailModel = detailModel;
        this.productService = productService;
    }
    async create(createDetailDto) {
        const { product, amount } = createDetailDto;
        const productObject = await this.productService.findOne(product);
        if (!productObject) {
            throw new common_1.BadRequestException("no existe ese producto");
        }
        const { unitPrice, igvIndicator, igv, ...rest } = productObject;
        const igvImportDetail = igvIndicator ? unitPrice * amount * igv / (100 + igv) : 0;
        const newDetail = new this.detailModel({ product: productObject,
            amount,
            totalPrice: amount * unitPrice,
            igvImportDetail });
        return await newDetail.save();
    }
    findAll() {
        return `This action returns all detail`;
    }
    async findOne(id) {
        try {
            const dataBaseDetail = await this.detailModel.findById(id);
            return dataBaseDetail;
        }
        catch (error) {
            throw new common_1.NotFoundException('that detail not exist');
        }
    }
};
exports.DetailService = DetailService;
exports.DetailService = DetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(detail_entity_1.Detail.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, product_service_1.ProductService])
], DetailService);
//# sourceMappingURL=detail.service.js.map