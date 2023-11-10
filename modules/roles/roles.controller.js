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
exports.RolesController = void 0;
const permission_dto_1 = require("./../permissions/dto/permission-dto");
const role_dto_1 = require("./dto/role-dto");
const roles_service_1 = require("./roles.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    createRole(role) {
        return this.rolesService.createRole(role);
    }
    getRoles(name) {
        return this.rolesService.getRoles(name);
    }
    updateRole(name, role) {
        return this.rolesService.updateRole(name, role);
    }
    addPermission(name, permission) {
        return this.rolesService.addPermission(name, permission);
    }
    removePermission(name, permission) {
        return this.rolesService.removePermission(name, permission);
    }
    deleteRole(name) {
        return this.rolesService.deleteRole(name);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        description: 'Crea un nuevo rol'
    }),
    (0, swagger_1.ApiBody)({
        type: role_dto_1.RoleDto,
        description: 'Crea un nuevo rol mediate un RoleDto',
        examples: {
            ejemplo1: {
                value: {
                    name: "superadmin"
                }
            },
            ejemplo2: {
                value: {
                    name: "admin",
                    permissions: [
                        {
                            name: "CREATE"
                        },
                        {
                            name: "UPDATE"
                        }
                    ]
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Rol creado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El rol existe.<br/>
                        El permiso no existe`
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'Devuelve todos los roles pudiendo filtrar por nombre'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        type: String,
        required: false,
        description: 'Filtra roles según el nombre dado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Roles devueltos correctamente'
    }),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Put)('/:name'),
    (0, swagger_1.ApiOperation)({
        description: 'Actualiza un nuevo rol'
    }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del rol a actualizar'
    }),
    (0, swagger_1.ApiBody)({
        type: role_dto_1.RoleDto,
        description: 'Actualiza un nuevo rol mediate un RoleDto',
        examples: {
            ejemplo1: {
                value: {
                    name: "superadmin"
                }
            },
            ejemplo2: {
                value: {
                    name: "admin",
                    permissions: [
                        {
                            name: "CREATE"
                        }
                    ]
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Rol actualizado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El nuevo rol ya existe.<br/>
                        El permiso no existe`
    }),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Patch)('add-permission/:name'),
    (0, swagger_1.ApiOperation)({
        description: 'Añade un permiso al rol'
    }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del rol para añadir permisos'
    }),
    (0, swagger_1.ApiBody)({
        type: permission_dto_1.PermissionDto,
        description: 'Añade un permiso al rol mediante un PermissionDto',
        examples: {
            ejemplo1: {
                value: {
                    name: "READ"
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permiso añadido al rol correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El rol no existe.<br/>
                        El permiso no existe.<br/>
                        El permiso ya existe en el rol.`
    }),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, permission_dto_1.PermissionDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "addPermission", null);
__decorate([
    (0, common_1.Patch)('remove-permission/:name'),
    (0, swagger_1.ApiOperation)({
        description: 'Elimina un permiso al rol'
    }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del rol para eliminar permisos'
    }),
    (0, swagger_1.ApiBody)({
        type: permission_dto_1.PermissionDto,
        description: 'Elimina un permiso al rol mediante un PermissionDto',
        examples: {
            ejemplo1: {
                value: {
                    name: "READ"
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permiso eliminado al rol correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El rol no existe.<br/>
                        El permiso no existe.<br/>
                        El permiso no existe en el rol.`
    }),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, permission_dto_1.PermissionDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "removePermission", null);
__decorate([
    (0, common_1.Delete)('/:name'),
    (0, swagger_1.ApiOperation)({
        description: 'Elimina un rol'
    }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del rol a eliminar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Rol eliminado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El rol no existe<br/>
                        Existen usuarios con el rol`
    }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "deleteRole", null);
RolesController = __decorate([
    (0, common_1.Controller)('api/v1/roles'),
    (0, swagger_1.ApiTags)("Roles"),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map