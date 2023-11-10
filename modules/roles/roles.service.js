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
exports.RolesService = void 0;
const users_service_1 = require("./../users/users.service");
const mongoose_1 = require("mongoose");
const permissions_service_1 = require("./../permissions/permissions.service");
const common_1 = require("@nestjs/common");
let RolesService = class RolesService {
    constructor(roleModel, permissionService, userService) {
        this.roleModel = roleModel;
        this.permissionService = permissionService;
        this.userService = userService;
    }
    async createRole(role) {
        const roleExists = await this.findRolebyName(role.name);
        if (roleExists) {
            throw new common_1.ConflictException('El rol existe');
        }
        if (!role.permissions) {
            role.permissions = [];
        }
        else {
            const permissionsRole = [];
            for (const permission of role.permissions) {
                const p = await this.permissionService.findPermissionByname(permission.name);
                if (!p) {
                    throw new common_1.ConflictException('El permiso ' + permission.name + ' no existe');
                }
                permissionsRole.push(p);
            }
            role.permissions = permissionsRole;
        }
        const r = new this.roleModel(role);
        await r.save();
        return r.populate('permissions');
    }
    getRoles(name) {
        const filter = {};
        if (name) {
            filter['name'] = { $regex: name, $options: 'i' };
        }
        return this.roleModel.find(filter).populate('permissions');
    }
    findRolebyName(name) {
        if (name) {
            return this.roleModel.findOne({ name: name.toUpperCase() }).populate('permissions');
        }
        else {
            return null;
        }
    }
    async updateRole(name, role) {
        const roleExists = await this.findRolebyName(name);
        if (roleExists) {
            const newRoleExists = await this.findRolebyName(role.name);
            if (newRoleExists && newRoleExists.name != name) {
                throw new common_1.ConflictException('El nuevo rol ya existe');
            }
            if (!role.permissions) {
                role.permissions = [];
            }
            else {
                const permissionsRole = [];
                for (const permission of role.permissions) {
                    const p = await this.permissionService.findPermissionByname(permission.name);
                    if (!p) {
                        throw new common_1.ConflictException('El permiso ' + permission.name + ' no existe');
                    }
                    permissionsRole.push(p);
                }
                role.permissions = permissionsRole;
            }
            await roleExists.updateOne(role);
            const roleUpdated = await this.roleModel.findById(roleExists._id);
            return roleUpdated.populate('permissions');
        }
        else {
            return this.createRole(role);
        }
    }
    async addPermission(name, permission) {
        const roleExists = await this.findRolebyName(name);
        if (roleExists) {
            const permissionExists = await this.permissionService.findPermissionByname(permission.name);
            if (permissionExists) {
                const permissions = roleExists.permissions;
                const permissionRoleExists = permissions.find(p => p.name == permission.name);
                if (!permissionRoleExists) {
                    roleExists.permissions.push(permission);
                    return this.updateRole(name, roleExists);
                }
                else {
                    throw new common_1.ConflictException('El permiso ya existe en el rol');
                }
            }
            else {
                throw new common_1.ConflictException('El permiso no existe');
            }
        }
        else {
            throw new common_1.ConflictException('El rol no existe');
        }
    }
    async removePermission(name, permission) {
        const roleExists = await this.findRolebyName(name);
        if (roleExists) {
            const permissionExists = await this.permissionService.findPermissionByname(permission.name);
            if (permissionExists) {
                const permissions = roleExists.permissions;
                const indexPermissionRoleExists = permissions.findIndex(p => p.name == permission.name);
                if (indexPermissionRoleExists != -1) {
                    roleExists.permissions.splice(indexPermissionRoleExists, 1);
                    return this.updateRole(name, roleExists);
                }
                else {
                    throw new common_1.ConflictException('El permiso no existe en el rol');
                }
            }
            else {
                throw new common_1.ConflictException('El permiso no existe');
            }
        }
        else {
            throw new common_1.ConflictException('El rol no existe');
        }
    }
    async deleteRole(name) {
        const roleExists = await this.findRolebyName(name);
        if (roleExists) {
            const numbersUsers = await this.userService.numberUsersWithRole(name);
            if (numbersUsers > 0) {
                throw new common_1.ConflictException('Existe usuarios con el rol ' + name);
            }
            else {
                await roleExists.delete();
                return true;
            }
        }
        else {
            throw new common_1.ConflictException('El rol no existe');
        }
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ROLE_MODEL')),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        permissions_service_1.PermissionsService,
        users_service_1.UsersService])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map