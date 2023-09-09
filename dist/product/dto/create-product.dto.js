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
exports.CreateProductDto = exports.TipoProducto = exports.Unit = void 0;
const class_validator_1 = require("class-validator");
var Unit;
(function (Unit) {
    Unit["Grueso"] = "grueso";
    Unit["Docena"] = "docena";
    Unit["Kg"] = "kg";
    Unit["Unidad"] = "unidad";
    Unit["Metro"] = "metro";
    Unit["Tonelada"] = "tonelada";
    Unit["Mediadocena"] = "mediadocena";
})(Unit || (exports.Unit = Unit = {}));
var TipoProducto;
(function (TipoProducto) {
    TipoProducto["ProductoPrimeraNecesidad"] = "producto_primera_necesidad";
    TipoProducto["MateriaPrima"] = "materia_prima";
    TipoProducto["Consumible"] = "consumible";
    TipoProducto["Tecnologia"] = "tecnologia";
    TipoProducto["Electrodomestico"] = "electrodomestico";
    TipoProducto["Ropa"] = "ropa";
})(TipoProducto || (exports.TipoProducto = TipoProducto = {}));
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(Unit),
    __metadata("design:type", String)
], CreateProductDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "img", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "unitPrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(TipoProducto),
    __metadata("design:type", String)
], CreateProductDto.prototype, "tipoProducto", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "igvIndicator", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "igv", void 0);
//# sourceMappingURL=create-product.dto.js.map