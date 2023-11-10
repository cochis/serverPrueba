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
exports.UsersController = void 0;
const user_role_dto_1 = require("./dto/user-role-dto");
const user_dto_1 = require("./dto/user-dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(user) {
        return this.usersService.createUser(user);
    }
    getUsers() {
        return this.usersService.getUsers();
    }
    getUsersDeleted() {
        return this.usersService.getUsersDeleted();
    }
    updateUser(user) {
        return this.usersService.updateUser(user);
    }
    addRole(userRole) {
        return this.usersService.addRole(userRole);
    }
    removeRole(userCode) {
        return this.usersService.removeRole(userCode);
    }
    deleteUser(userCode) {
        return this.usersService.deleteUser(userCode);
    }
    restoreUser(userCode) {
        return this.usersService.restoreUser(userCode);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        description: 'Crea un usuario'
    }),
    (0, swagger_1.ApiBody)({
        type: user_dto_1.UserDto,
        description: 'Crea un usuario usando un UserDto',
        examples: {
            ejemplo1: {
                value: {
                    name: "User1",
                    email: "f@gmail.com",
                    birthdate: "1990-02-05",
                    role: {
                        name: "ADMIN"
                    }
                }
            },
            ejemplo2: {
                value: {
                    name: "User2",
                    email: "f2@gmail.com",
                    birthdate: "1995-02-05",
                    role: null
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Usuario creado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El email del usuario ya existe<br/>
                        El rol no existe`
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'Devuelve todos los usuarios'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuarios devueltos correctamente'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/deleted'),
    (0, swagger_1.ApiOperation)({
        description: 'Devuelve todos los usuarios borrados'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuarios borrados devueltos correctamente'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsersDeleted", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({
        description: 'Actualiza un usuario'
    }),
    (0, swagger_1.ApiBody)({
        type: user_dto_1.UserDto,
        description: '',
        examples: {
            ejemplo1: {
                value: {
                    name: "User2",
                    email: "f@gmail.com",
                    birthdate: "1990-22-05",
                    role: null
                }
            },
            ejemplo2: {
                value: {
                    name: "User3",
                    email: "f2@gmail.com",
                    birthdate: "1995-02-05",
                    role: {
                        name: "ADMIN1"
                    }
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuario actualizado correctamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'El rol no existe'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)('/add-role'),
    (0, swagger_1.ApiOperation)({
        description: 'Añade un rol a un usuario'
    }),
    (0, swagger_1.ApiBody)({
        type: user_role_dto_1.UserRoleDto,
        description: 'Añade un rol a un usuario mediante un UserRoleDto',
        examples: {
            ejemplo1: {
                value: {
                    userCode: 1,
                    roleName: "ADMIN"
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Rol añadido correctamente al usuario'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El usuario ya tiene rol<br/>
                        El rol no existe<br/>
                        El usuario no existe<br/>`
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_role_dto_1.UserRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, common_1.Patch)('/remove-role/:userCode'),
    (0, swagger_1.ApiOperation)({
        description: 'Elimina el rol de un usuario'
    }),
    (0, swagger_1.ApiParam)({
        name: 'userCode',
        type: Number,
        required: true,
        description: 'Codigo del usuario que vamos a eliminar su rol'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Rol eliminado del usuario'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El rol no existe<br/>
                        El usuario no existe`
    }),
    __param(0, (0, common_1.Param)('userCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeRole", null);
__decorate([
    (0, common_1.Delete)('/:userCode'),
    (0, swagger_1.ApiOperation)({
        description: 'Elimina un usuario'
    }),
    (0, swagger_1.ApiParam)({
        name: 'userCode',
        type: Number,
        required: true,
        description: 'Codigo del usuario que vamos a eliminar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuario borrado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El usuario ya esta borrado<br/>
                        El usuario no existe`
    }),
    __param(0, (0, common_1.Param)('userCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Patch)('/restore/:userCode'),
    (0, swagger_1.ApiOperation)({
        description: 'Restaura un usuario'
    }),
    (0, swagger_1.ApiParam)({
        name: 'userCode',
        type: Number,
        required: true,
        description: 'Codigo del usuario que vamos a restaurar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuario reataurado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `El usuario no esta borrado<br/>
                        El usuario no existe`
    }),
    __param(0, (0, common_1.Param)('userCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "restoreUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('api/v1/users'),
    (0, swagger_1.ApiTags)("Users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map