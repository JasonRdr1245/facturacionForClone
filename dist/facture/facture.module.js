"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureModule = void 0;
const common_1 = require("@nestjs/common");
const facture_service_1 = require("./facture.service");
const facture_controller_1 = require("./facture.controller");
const mongoose_1 = require("@nestjs/mongoose");
const facture_entity_1 = require("./entities/facture.entity");
const user_module_1 = require("../user/user.module");
const company_entity_1 = require("../company/entities/company.entity");
const detail_module_1 = require("../detail/detail.module");
const client_entity_1 = require("../client/entities/client.entity");
let FactureModule = class FactureModule {
};
exports.FactureModule = FactureModule;
exports.FactureModule = FactureModule = __decorate([
    (0, common_1.Module)({
        imports: [detail_module_1.DetailModule, user_module_1.UserModule, mongoose_1.MongooseModule.forFeature([{ name: facture_entity_1.Facture.name, schema: facture_entity_1.FactureSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_entity_1.Company.name, schema: company_entity_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: client_entity_1.Client.name, schema: client_entity_1.ClientSchema }])
        ],
        controllers: [facture_controller_1.FactureController],
        providers: [facture_service_1.FactureService],
    })
], FactureModule);
//# sourceMappingURL=facture.module.js.map