/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto'; 
import { CatsService } from './cats.service';
import { Cat } from './Interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
/*
  constructor(private catsService: CatsService){}

  @Post()
  async create(@Body() createCatDto:CreateCatDto){
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]>{
    return this.catsService.findAll();
  }*/
  
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto): Promise<string> { 
    return 'This cat adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cat'; // Corregido el mensaje
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() UpdateCatDto: UpdateCatDto): Promise<string> {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This acttion removes a  #${id} cat`; // Corregido el mensaje
  }
  
}
