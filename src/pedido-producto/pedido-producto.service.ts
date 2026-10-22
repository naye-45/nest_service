import { Injectable } from '@nestjs/common';
import { CreatePedidoProductoDto } from './dto/create-pedido-producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido-producto.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class PedidoProductoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPedidoProductoDto: CreatePedidoProductoDto) {
    return this.prisma.pedidoproducto.create({ data: createPedidoProductoDto });
  }

  findAll() {
    return this.prisma.pedidoproducto.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedidoproducto.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoProductoDto: UpdatePedidoProductoDto) {
    return this.prisma.pedidoproducto.update({
      where: { id },
      data: updatePedidoProductoDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedidoproducto.delete({ where: { id } });
  }
}
