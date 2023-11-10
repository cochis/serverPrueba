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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const role_dto_1 = require("./../../roles/dto/role-dto");
class UserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del usuario'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'email',
        type: String,
        required: true,
        description: 'Email del usuario'
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'birthdate',
        type: Date,
        required: true,
        description: 'Fecha de cumpleaños del usuario'
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'role',
        type: role_dto_1.RoleDto,
        required: false,
        description: 'Rol del usuario'
    }),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", role_dto_1.RoleDto)
], UserDto.prototype, "role", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user-dto.js.map