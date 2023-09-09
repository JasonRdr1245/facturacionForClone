import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/payload.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private userService: UserService) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No hay token en la peticion')
    }
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token, {
        secret: process.env.JWT_SEED
      }
      );

      const user=await this.userService.findUserById(payload.id)
      if(!user){
        throw new UnauthorizedException('User not exist')
      }

      request['user'] = user;
    } catch (error) {
      throw new UnauthorizedException('token no valido');
    }
    return Promise.resolve(true);
  }
  extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
