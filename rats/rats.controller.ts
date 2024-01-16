/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateRatDto } from './dto/create-rat-dto';
import { UpdateRatDto } from './dto/update-rat-dto'; // Corregido el nombre de la importación

@Controller('rats')
export class RatsController {
  @Post()
  async create(@Body() CreateRatDto: CreateRatDto): Promise<string> { 
    return 'This rat adds a new rat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all rat'; // Corregido el mensaje
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() UpdateRatDto: UpdateRatDto): Promise<string> {
    return `This action updates a #${id} rat`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This acttion removes a  #${id} rat`; // Corregido el mensaje
  }
}
