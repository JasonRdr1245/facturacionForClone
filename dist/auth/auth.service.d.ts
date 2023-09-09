import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/payload.interface';
import { LoginResponse } from './interfaces/login-response.interface';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userModel;
    private jwtService;
    private readonly userService;
    constructor(userModel: Model<User>, jwtService: JwtService, userService: UserService);
    login(loginUserDto: LoginUserDto): Promise<LoginResponse>;
    register(createUserDto: CreateUserDto): Promise<LoginResponse>;
    getJwtToken(payload: JwtPayload): string;
}
