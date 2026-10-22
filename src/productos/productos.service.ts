import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductoDto: CreateProductoDto) {
    return this.prisma.producto.create({
      data: createProductoDto,
    });
  }
  findAll() {
    return this.prisma.producto.findMany();
  }
  findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id } });
  }
  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.prisma.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  // 5. ELIMINAR: Borra un producto de la base de datos por su ID
  remove(id: number) {
    return this.prisma.producto.delete({ where: { id } });
  }
}
