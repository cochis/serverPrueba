/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from './../users/users.service';
import { PermissionDto } from './../permissions/dto/permission-dto';
import { IPermission } from './../permissions/interfaces/ipermission';
import { RoleDto } from './dto/role-dto';
import { Model } from 'mongoose';
import { PermissionsService } from './../permissions/permissions.service';
import { IRole } from './interfaces/irole';
export declare class RolesService {
    private roleModel;
    private permissionService;
    private userService;
    constructor(roleModel: Model<IRole>, permissionService: PermissionsService, userService: UsersService);
    createRole(role: RoleDto): Promise<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>>;
    getRoles(name: string): import("mongoose").Query<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[], import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IRole>;
    findRolebyName(name: string): import("mongoose").Query<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, "permissions"> & {
        permissions: IPermission[];
    }, import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Omit<IRole, "permissions"> & {
        permissions: IPermission[];
    }>;
    updateRole(name: string, role: RoleDto): Promise<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>>;
    addPermission(name: string, permission: PermissionDto): Promise<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>>;
    removePermission(name: string, permission: PermissionDto): Promise<Omit<import("mongoose").Document<unknown, any, IRole> & Omit<IRole & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>>;
    deleteRole(name: string): Promise<boolean>;
}
