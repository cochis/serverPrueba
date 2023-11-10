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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const permission_dto_1 = require("./dto/permission-dto");
let PermissionsService = class PermissionsService {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async createPermission(permission) {
        const permissionExists = await this.permissionModel.findOne({
            name: permission.name
        });
        if (permissionExists) {
            throw new common_1.ConflictException('El permiso existe');
        }
        const p = new this.permissionModel(permission);
        return p.save();
    }
    getPermissions(name) {
        const filter = {};
        if (name) {
            filter['name'] = {
                '$regex': name,
                '$options': 'i'
            };
        }
        return this.permissionModel.find(filter);
    }
    async updatePermission(updatePermission) {
        const permissionExists = await this.permissionModel.findOne({
            name: updatePermission.originalName
        });
        const newPermissionExists = await this.permissionModel.findOne({
            name: updatePermission.newName
        });
        if (permissionExists && !newPermissionExists) {
            await permissionExists.updateOne({
                name: updatePermission.newName
            });
            return this.permissionModel.findById(permissionExists._id);
        }
        else if (!permissionExists) {
            const permission = new permission_dto_1.PermissionDto();
            permission.name = updatePermission.originalName;
            return this.createPermission(permission);
        }
        else {
            throw new common_1.ConflictException('No se puede actualizar el permiso');
        }
    }
    async deletePermission(name) {
        const permissionExists = await this.permissionModel.findOne({
            name
        });
        if (permissionExists) {
            await permissionExists.delete();
            return true;
        }
        else {
            throw new common_1.ConflictException('El permiso no existe');
        }
    }
    findPermissionByname(name) {
        return this.permissionModel.findOne({
            name
        });
    }
};
PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PERMISSION_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map