import { Module } from '@nestjs/common';
import { DetailService } from './detail.service';
import { DetailController } from './detail.controller';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Detail, DetailSchema } from './entities/detail.entity';

@Module({
  imports:[
    UserModule,
    ProductModule,
    MongooseModule.forFeature([{name:Detail.name,schema:DetailSchema}])
    ],
  controllers: [DetailController],
  exports:[DetailService],
  providers: [DetailService],
})
export class DetailModule {}
