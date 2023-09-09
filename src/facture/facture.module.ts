import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Facture, FactureSchema } from './entities/facture.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { Company, CompanySchema } from 'src/company/entities/company.entity';
import { DetailService } from 'src/detail/detail.service';
import { DetailModule } from 'src/detail/detail.module';
import { Client, ClientSchema } from 'src/client/entities/client.entity';

@Module({
  imports:[DetailModule,UserModule,MongooseModule.forFeature([{name:Facture.name,schema:FactureSchema}]),
    MongooseModule.forFeature([{name:Company.name,schema:CompanySchema}]),
    MongooseModule.forFeature([{name:Client.name,schema:ClientSchema}])
  ],
  controllers: [FactureController],
  providers: [FactureService],
})
export class FactureModule {}
