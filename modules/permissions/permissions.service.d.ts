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
import { UpdatePermissionDto } from './dto/update-permission-dto';
import { IPermission } from './interfaces/ipermission';
import { Model } from 'mongoose';
import { PermissionDto } from './dto/permission-dto';
export declare class PermissionsService {
    private permissionModel;
    constructor(permissionModel: Model<IPermission>);
    createPermission(permission: PermissionDto): Promise<import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getPermissions(name: string): import("mongoose").Query<(import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IPermission>;
    updatePermission(updatePermission: UpdatePermissionDto): Promise<import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deletePermission(name: string): Promise<boolean>;
    findPermissionByname(name: string): import("mongoose").Query<import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, any, IPermission> & Omit<IPermission & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IPermission>;
}
