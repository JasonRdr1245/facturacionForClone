import { User } from "src/user/entities/user.entity";

export interface LoginResponse{
    user:User;
    token:string
}