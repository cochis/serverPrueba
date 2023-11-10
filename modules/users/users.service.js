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
exports.UsersService = void 0;
const roles_service_1 = require("./../roles/roles.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel, roleService) {
        this.userModel = userModel;
        this.roleService = roleService;
    }
    async createUser(user) {
        const userExists = await this.findUserByEmail(user.email);
        if (userExists) {
            throw new common_1.ConflictException('El usuario con email ' + user.email + ' existe');
        }
        if (user.role) {
            const roleExists = await this.roleService.findRolebyName(user.role.name);
            if (!roleExists) {
                throw new common_1.ConflictException('El rol ' + user.role.name + ' no existe');
            }
            else {
                user.role = roleExists;
            }
        }
        const nUsers = await this.userModel.countDocuments();
        const u = new this.userModel(Object.assign({ userCode: nUsers + 1 }, user));
        return u.save();
    }
    findUserByEmail(email) {
        if (email) {
            return this.userModel.findOne({
                email: email.toLocaleLowerCase()
            });
        }
        else {
            return null;
        }
    }
    findUserByUserCode(userCode) {
        if (userCode) {
            return this.userModel.findOne({
                userCode
            });
        }
        else {
            return null;
        }
    }
    getUsers() {
        return this.userModel.find().populate({
            path: 'role',
            populate: {
                path: 'permissions',
                model: 'Permission'
            }
        });
    }
    getUsersDeleted() {
        return this.userModel.find({
            deleted: true
        }).populate({
            path: 'role',
            populate: {
                path: 'permissions',
                model: 'Permission'
            }
        });
    }
    async updateUser(user) {
        const userExists = await this.findUserByEmail(user.email);
        if (userExists) {
            if (user.role) {
                const roleExists = await this.roleService.findRolebyName(user.role.name);
                if (roleExists) {
                    user.role = roleExists;
                }
                else {
                    throw new common_1.ConflictException('El rol no existe');
                }
            }
            await userExists.updateOne(user);
            return this.findUserByEmail(user.email);
        }
        else {
            return this.createUser(user);
        }
    }
    async addRole(userRole) {
        const userExists = await this.findUserByUserCode(userRole.userCode);
        if (userExists) {
            if (userExists.role) {
                throw new common_1.ConflictException('El usuario ya tiene rol');
            }
            else {
                const roleExists = await this.roleService.findRolebyName(userRole.roleName);
                if (roleExists) {
                    await userExists.updateOne({
                        role: roleExists
                    });
                    const userUpdated = await this.findUserByUserCode(userRole.userCode);
                    return userUpdated.populate({
                        path: 'role',
                        populate: {
                            path: 'permissions',
                            model: 'Permission'
                        }
                    });
                }
                else {
                    throw new common_1.ConflictException('El rol no existe');
                }
            }
        }
        else {
            throw new common_1.ConflictException('El usuario no existe');
        }
    }
    async removeRole(userCode) {
        const userExists = await this.findUserByUserCode(userCode);
        if (userExists) {
            if (userExists.role) {
                await userExists.updateOne({
                    role: null
                });
                return this.findUserByUserCode(userCode);
            }
            else {
                throw new common_1.ConflictException('El usuario no tiene un rol');
            }
        }
        else {
            throw new common_1.ConflictException('El usuario no existe');
        }
    }
    async deleteUser(userCode) {
        const userExists = await this.findUserByUserCode(userCode);
        if (userExists) {
            if (userExists.deleted) {
                throw new common_1.ConflictException('El usuario ya esta borrado');
            }
            else {
                await userExists.updateOne({
                    deleted: true
                });
                return true;
            }
        }
        else {
            throw new common_1.ConflictException('El usuario no existe');
        }
    }
    async restoreUser(userCode) {
        const userExists = await this.findUserByUserCode(userCode);
        if (userExists) {
            if (!userExists.deleted) {
                throw new common_1.ConflictException('El usuario no esta borrado');
            }
            else {
                await userExists.updateOne({
                    deleted: false
                });
                return true;
            }
        }
        else {
            throw new common_1.ConflictException('El usuario no existe');
        }
    }
    async numberUsersWithRole(nameRole) {
        const userWithRole = await this.userModel.aggregate([
            {
                $lookup: {
                    from: 'roles',
                    localField: 'role',
                    foreignField: '_id',
                    as: 'roles'
                }
            },
            {
                $match: {
                    "roles.name": nameRole.toUpperCase()
                }
            },
            {
                $count: "count"
            }
        ]);
        if (userWithRole.length > 0) {
            return userWithRole[0].count;
        }
        else {
            return 0;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => roles_service_1.RolesService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map