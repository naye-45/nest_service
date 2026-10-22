import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PrismaService } from '../prisma/prisma.service';
import {ProductosModule} from '../productos/productos.module';
import {PrismaModule} from '../prisma/prismaModule';

@Module({
  imports: [
    PrismaModule,
    ProductosModule,
  ],
  controllers: [PedidoController],
  providers: [PedidoService, PrismaService],
})
export class PedidoModule {}
