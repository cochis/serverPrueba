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
exports.PermissionsController = void 0;
const update_permission_dto_1 = require("./dto/update-permission-dto");
const permissions_service_1 = require("./permissions.service");
const common_1 = require("@nestjs/common");
const permission_dto_1 = require("./dto/permission-dto");
const swagger_1 = require("@nestjs/swagger");
let PermissionsController = class PermissionsController {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    createPermission(permission) {
        return this.permissionService.createPermission(permission);
    }
    getPermissions(name) {
        return this.permissionService.getPermissions(name);
    }
    updatePermission(updatePermission) {
        return this.permissionService.updatePermission(updatePermission);
    }
    deletePermission(name) {
        return this.permissionService.deletePermission(name);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        description: 'Crea un permiso'
    }),
    (0, swagger_1.ApiBody)({
        description: ' Crea un permiso usando un PermissionDto',
        type: permission_dto_1.PermissionDto,
        examples: {
            ejemplo1: {
                value: {
                    name: 'CREATE'
                }
            },
            ejemplo2: {
                value: {
                    name: 'DELETE'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Permiso creado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Permiso existe'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.PermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "createPermission", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'Devuelve los permisos filtrados por un nombre'
    }),
    (0, swagger_1.ApiQuery)({
        description: 'Devuelve los permisos filtrados por un nombre. Sino se da un nombre, devuelve todos',
        type: String,
        required: false,
        name: 'name'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permisos devueltos correctamente'
    }),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "getPermissions", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({
        description: 'Actualiza un permiso'
    }),
    (0, swagger_1.ApiBody)({
        description: ' Actualiza un permiso usando un UpdatePermissionDto',
        type: update_permission_dto_1.UpdatePermissionDto,
        examples: {
            ejemplo1: {
                value: {
                    originalName: 'CREATE',
                    newName: 'DELETE'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permiso actualizado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ambos permisos existen'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_permission_dto_1.UpdatePermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "updatePermission", null);
__decorate([
    (0, common_1.Delete)('/:name'),
    (0, swagger_1.ApiOperation)({
        description: 'Borra el permiso dado un nombre'
    }),
    (0, swagger_1.ApiParam)({
        description: 'Nombre del permiso a borrar',
        type: String,
        required: false,
        name: 'name'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permisos borrado correctamente'
    }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "deletePermission", null);
PermissionsController = __decorate([
    (0, common_1.Controller)('api/v1/permissions'),
    (0, swagger_1.ApiTags)("Permissions"),
    __metadata("design:paramtypes", [permissions_service_1.PermissionsService])
], PermissionsController);
exports.PermissionsController = PermissionsController;
//# sourceMappingURL=permissions.controller.js.map