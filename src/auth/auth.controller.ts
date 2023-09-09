import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('/login')
    login(@Body() loginUserDto:LoginUserDto ){
        return this.authService.login(loginUserDto);
    }
    @Post('/register')
    register(@Body() createUserDto:CreateUserDto){
        return this.authService.register(createUserDto)
    }
}
