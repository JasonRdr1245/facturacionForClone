import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<import("./interfaces/login-response.interface").LoginResponse>;
    register(createUserDto: CreateUserDto): Promise<import("./interfaces/login-response.interface").LoginResponse>;
}
