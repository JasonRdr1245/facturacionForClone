import { AuthService } from './../auth/auth.service';
import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from './entities/user.entity';
import { LoginResponse } from 'src/auth/interfaces/login-response.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private readonly authService:AuthService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req: Request) {
    const user = req['user'] as User;
    const users=this.userService.findAll();
    return {
      user,
      users:await users.exec(),
    };

  }

  @UseGuards(AuthGuard)
  @Get('check-token')
  checkToken(@Request() req:Request):LoginResponse{
    const user=req['user'] as User;
    return {
      token:this.authService.getJwtToken({id:user._id}),
      user
    }
  }


}
