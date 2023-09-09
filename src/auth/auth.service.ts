import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/entities/user.entity';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/payload.interface';
import { LoginResponse } from './interfaces/login-response.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly userService:UserService
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<LoginResponse> {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ email });
    if (!user || !bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Not valid credentials');
    }

    const { password: _, ...rest } = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }
  async register(createUserDto: CreateUserDto): Promise<LoginResponse> {
    const userCreated =await this.userService.create(createUserDto)
    const userId=await this.userModel.findOne({email:userCreated.email}).select("id")
    return {
        user:userCreated,
        token: this.getJwtToken( {id:String(userId)})
    }
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }


}
