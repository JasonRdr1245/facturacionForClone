import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pay } from './entities/pay.entity';
import { Model } from 'mongoose';

@Injectable()
export class PayService {
  constructor(@InjectModel(Pay.name) private readonly payModel:Model<Pay>){}
  async create(createPayDto: CreatePayDto) {
    const newPay= new this.payModel({
      import:createPayDto.import,
      payDate: new Date()
    })
    return await newPay.save()
  }

  findAll() {
    return `This action returns all pay`;
  }

  async findOne(id: string) {
    try{
    const dataBasePay=await this.payModel.findById(id)


    return dataBasePay;
    }catch(error){
      throw new NotFoundException("dato no encontrado")
    }  
  }

}
