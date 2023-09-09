"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_detail_dto_1 = require("./create-detail.dto");
class UpdateDetailDto extends (0, mapped_types_1.PartialType)(create_detail_dto_1.CreateDetailDto) {
}
exports.UpdateDetailDto = UpdateDetailDto;
//# sourceMappingURL=update-detail.dto.js.map