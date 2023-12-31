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
exports.UserRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'userCode',
        type: Number,
        required: true,
        description: 'Codigo del usuario al que añadir el rol'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UserRoleDto.prototype, "userCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'roleName',
        type: String,
        required: true,
        description: 'Nombre del rol a añadir'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUppercase)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRoleDto.prototype, "roleName", void 0);
exports.UserRoleDto = UserRoleDto;
//# sourceMappingURL=user-role-dto.js.map