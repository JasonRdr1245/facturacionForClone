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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureSchema = exports.Facture = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_entity_1 = require("../../client/entities/client.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Facture = class Facture {
};
exports.Facture = Facture;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['cancelado', 'activa'], default: 'activa' }),
    __metadata("design:type", String)
], Facture.prototype, "factureState", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], Facture.prototype, "totalPayments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Facture.prototype, "totalPriceNet", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Facture.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Facture.prototype, "totalIgv", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Facture.prototype, "amountPayments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['credito', 'contado'], default: 'contado' }),
    __metadata("design:type", String)
], Facture.prototype, "payMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Detail' }] }),
    __metadata("design:type", Array)
], Facture.prototype, "detail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_entity_1.User)
], Facture.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Company' }),
    __metadata("design:type", company_entity_1.Company)
], Facture.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Pay' }] }),
    __metadata("design:type", Array)
], Facture.prototype, "pay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Client' }),
    __metadata("design:type", client_entity_1.Client)
], Facture.prototype, "client", void 0);
exports.Facture = Facture = __decorate([
    (0, mongoose_1.Schema)()
], Facture);
exports.FactureSchema = mongoose_1.SchemaFactory.createForClass(Facture);
//# sourceMappingURL=facture.entity.js.map