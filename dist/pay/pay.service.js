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
exports.PayService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pay_entity_1 = require("./entities/pay.entity");
const mongoose_2 = require("mongoose");
let PayService = class PayService {
    constructor(payModel) {
        this.payModel = payModel;
    }
    async create(createPayDto) {
        const newPay = new this.payModel({
            import: createPayDto.import,
            payDate: new Date()
        });
        return await newPay.save();
    }
    findAll() {
        return `This action returns all pay`;
    }
    async findOne(id) {
        try {
            const dataBasePay = await this.payModel.findById(id);
            return dataBasePay;
        }
        catch (error) {
            throw new common_1.NotFoundException("dato no encontrado");
        }
    }
};
exports.PayService = PayService;
exports.PayService = PayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pay_entity_1.Pay.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PayService);
//# sourceMappingURL=pay.service.js.map