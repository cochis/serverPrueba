"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const users_module_1 = require("./../users/users.module");
const role_schema_1 = require("./schemas/role.schema");
const mongo_connection_service_1 = require("./../mongo-connection/mongo-connection.service");
const permissions_module_1 = require("./../permissions/permissions.module");
const mongo_connection_module_1 = require("./../mongo-connection/mongo-connection.module");
const common_1 = require("@nestjs/common");
const roles_controller_1 = require("./roles.controller");
const roles_service_1 = require("./roles.service");
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongo_connection_module_1.MongoConnectionModule,
            permissions_module_1.PermissionsModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule)
        ],
        controllers: [roles_controller_1.RolesController],
        providers: [
            roles_service_1.RolesService,
            {
                provide: 'ROLE_MODEL',
                useFactory: (db) => db.getConnection().model('Role', role_schema_1.roleSchema, 'roles'),
                inject: [mongo_connection_service_1.MongoConnectionService]
            }
        ],
        exports: [
            roles_service_1.RolesService
        ]
    })
], RolesModule);
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map