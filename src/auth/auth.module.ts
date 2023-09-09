import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Company, CompanySchema } from 'src/company/entities/company.entity';

@Module({
  imports: [HttpModule,ConfigModule.forRoot(),
    
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  MongooseModule.forFeature([{name:Company.name,schema:CompanySchema}]),
  JwtModule.register(
    {
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '60h' }
    }
  )],
  controllers: [AuthController],
  providers: [AuthService,UserService]
})
export class AuthModule { }
