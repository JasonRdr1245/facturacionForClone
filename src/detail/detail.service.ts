import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { ProductService } from 'src/product/product.service';
import { Detail, ProductForDetail } from './entities/detail.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DetailService {

  constructor(@InjectModel(Detail.name) private detailModel:Model<Detail>,private readonly productService:ProductService){}

  async create(createDetailDto: CreateDetailDto):Promise<Detail>{
    const {product,amount}= createDetailDto
    const productObject=await this.productService.findOne(product)
    
    if(!productObject){
      throw new BadRequestException("no existe ese producto")
    }
    const {unitPrice,igvIndicator,igv,...rest}=productObject;
    const igvImportDetail= igvIndicator? unitPrice*amount*igv/100 : 0 ;
    const newDetail=new this.detailModel({product:productObject,
      amount,
      totalPrice: amount*unitPrice,
      igvImportDetail})
    return await newDetail.save()
  }

  findAll() {
    return `This action returns all detail`;
  }

  async findOne(id: string) {
    try{
      const dataBaseDetail=await this.detailModel.findById(id)
      return dataBaseDetail
    }catch(error){
      throw new NotFoundException('that detail not exist')
    }
  }


}
