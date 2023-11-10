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
exports.RoleDto = void 0;
const permission_dto_1 = require("./../../permissions/dto/permission-dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class RoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del rol'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'permissions',
        type: permission_dto_1.PermissionDto,
        isArray: true,
        required: false,
        description: 'Conjunto de permisos'
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], RoleDto.prototype, "permissions", void 0);
exports.RoleDto = RoleDto;
//# sourceMappingURL=role-dto.js.map