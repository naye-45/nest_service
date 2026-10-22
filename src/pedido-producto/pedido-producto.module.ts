import { Module } from '@nestjs/common';
import { PedidoProductoService } from './pedido-producto.service';
import { PedidoProductoController } from './pedido-producto.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PedidoProductoController],
  providers: [PedidoProductoService,PrismaService],
})
export class PedidoProductoModule {}
