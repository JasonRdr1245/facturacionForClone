import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PayService } from './pay.service';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('pay')
export class PayController {
  constructor(private readonly payService: PayService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPayDto: CreatePayDto) {
    return this.payService.create(createPayDto);
  }

  @Get()
  findAll() {
    return this.payService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.payService.findOne(id);
  }

}
