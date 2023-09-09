import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ProductModule } from './product/product.module';
import { DetailModule } from './detail/detail.module';
import { PayModule } from './pay/pay.module';
import { FactureModule } from './facture/facture.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule,
    AuthModule,
    CompanyModule,
    ProductModule,
    DetailModule,
    PayModule,
    FactureModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
