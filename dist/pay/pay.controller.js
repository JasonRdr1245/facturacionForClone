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
exports.PayController = void 0;
const common_1 = require("@nestjs/common");
const pay_service_1 = require("./pay.service");
const create_pay_dto_1 = require("./dto/create-pay.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
let PayController = class PayController {
    constructor(payService) {
        this.payService = payService;
    }
    create(createPayDto) {
        return this.payService.create(createPayDto);
    }
    findAll() {
        return this.payService.findAll();
    }
    findOne(id) {
        return this.payService.findOne(id);
    }
};
exports.PayController = PayController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pay_dto_1.CreatePayDto]),
    __metadata("design:returntype", void 0)
], PayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayController.prototype, "findOne", null);
exports.PayController = PayController = __decorate([
    (0, common_1.Controller)('pay'),
    __metadata("design:paramtypes", [pay_service_1.PayService])
], PayController);
//# sourceMappingURL=pay.controller.js.map