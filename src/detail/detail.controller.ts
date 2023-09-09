import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DetailService } from './detail.service';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('detail')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createDetailDto: CreateDetailDto) {
    return this.detailService.create(createDetailDto);
  }

  @Get()
  findAll() {
    return this.detailService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.detailService.findOne(id);
  }

  
}
