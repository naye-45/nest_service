import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import {PrismaModule} from './prisma/prismaModule';
import {ConfigModule} from '@nestjs/config';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoProductoModule } from './pedido-producto/pedido-producto.module';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    PrismaModule,
    ProductosModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV,
    }),
    PedidoModule,
    PedidoProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
