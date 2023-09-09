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
exports.CreateFactureDto = exports.PayMethod = void 0;
const class_validator_1 = require("class-validator");
var PayMethod;
(function (PayMethod) {
    PayMethod["Credito"] = "credito";
    PayMethod["Contado"] = "contado";
})(PayMethod || (exports.PayMethod = PayMethod = {}));
class CreateFactureDto {
}
exports.CreateFactureDto = CreateFactureDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateFactureDto.prototype, "detail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFactureDto.prototype, "totalPayments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(PayMethod),
    __metadata("design:type", String)
], CreateFactureDto.prototype, "payMethod", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(11),
    __metadata("design:type", Number)
], CreateFactureDto.prototype, "ruc", void 0);
//# sourceMappingURL=create-facture.dto.js.map