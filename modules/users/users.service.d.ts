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
import { UserRoleDto } from './dto/user-role-dto';
import { UserDto } from './dto/user-dto';
import { RolesService } from './../roles/roles.service';
import { IUser } from './interfaces/iuser';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    private roleService;
    constructor(userModel: Model<IUser>, roleService: RolesService);
    createUser(user: UserDto): Promise<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findUserByEmail(email: string): import("mongoose").Query<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IUser>;
    findUserByUserCode(userCode: number): import("mongoose").Query<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IUser>;
    getUsers(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[], import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IUser>;
    getUsersDeleted(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[], import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IUser>;
    updateUser(user: UserDto): Promise<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addRole(userRole: UserRoleDto): Promise<Omit<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>>;
    removeRole(userCode: number): Promise<import("mongoose").Document<unknown, any, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteUser(userCode: number): Promise<boolean>;
    restoreUser(userCode: number): Promise<boolean>;
    numberUsersWithRole(nameRole: string): Promise<any>;
}
