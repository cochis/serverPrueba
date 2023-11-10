import { RoleDto } from './../../roles/dto/role-dto';
export declare class UserDto {
    name: string;
    email: string;
    birthdate: Date;
    role?: RoleDto;
}
