import { Module } from '@nestjs/common';
import { PayService } from './pay.service';
import { PayController } from './pay.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pay, PaySchema } from './entities/pay.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    UserModule,
    MongooseModule.forFeature([{name:Pay.name,schema:PaySchema}])
  ],
  controllers: [PayController],
  providers: [PayService],
})
export class PayModule {}
