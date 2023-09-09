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
exports.DetailSchema = exports.Detail = exports.ProductForDetail = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class ProductForDetail {
}
exports.ProductForDetail = ProductForDetail;
__decorate([
    (0, mongoose_1.Prop)({ unique: false, required: true }),
    __metadata("design:type", String)
], ProductForDetail.prototype, "name", void 0);
let Detail = class Detail {
};
exports.Detail = Detail;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", ProductForDetail)
], Detail.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Detail.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Detail.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Detail.prototype, "igvImportDetail", void 0);
exports.Detail = Detail = __decorate([
    (0, mongoose_1.Schema)()
], Detail);
exports.DetailSchema = mongoose_1.SchemaFactory.createForClass(Detail);
//# sourceMappingURL=detail.entity.js.map