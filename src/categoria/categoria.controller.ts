import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.findOne(id);
  }

  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(id, categoria);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriaService.remove(id);
  }
}
