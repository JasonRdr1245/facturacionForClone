import { ConflictException, Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel:Model<Product> ){}

  async create(createProductDto: CreateProductDto):Promise<Product>{
    try{
      const newProduct=new this.productModel(createProductDto)
      return await newProduct.save()
    }catch(error){
      throw new ConflictException("el producto ya existe")
    }
  }

  findAll() {
    const products=this.productModel.find()
    return products
  }

  async findOne(id: string) {
    try{
      const dataBaseProduct=await this.productModel.findById(id)
      return dataBaseProduct
    }catch(error){
      throw new NotFoundException('that product not exist')
    }
  }

}