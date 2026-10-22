import {
  Injectable,
  UnprocessableEntityException,
  ConflictException,
} from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductosService } from '../productos/productos.service';


@Injectable()
export class PedidoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productoService: ProductosService,
  ) {}
  async create(createPedidoDto: CreatePedidoDto) {
    const { estado, cantidad, producto: idproducto } = createPedidoDto as any;

    // Regla 1 Producto debe existir (422)
    const productoExiste = await this.productoService.findOne(idproducto);
    if (!productoExiste) {
      throw new UnprocessableEntityException('El producto no existe');
    }
    //Regla 2 = La cantidad del pedidod no puede superar el inventario(422)
    const stock = 50;
    if (cantidad > stock) {
      throw new UnprocessableEntityException(
        'La cantidad de pedido no puede superar el inventario ',
      );
    }

    // Regla 3 = el cliente no repite un pedido pendiente
    const pedidoPendiente = await this.prisma.pedido.findFirst({
      where: {
        estado: 'Pendiente',
        producto: {
          some: {
            idproducto: idproducto,
          },
        },
      },
    });
    if (!pedidoPendiente) {
      throw new ConflictException(
        'El cliente ya tiene un pedido pendiente para este producto',
      );
    }
  }
  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({
      where: { id },
      data: {
        estado: updatePedidoDto.estado,
        cantidad: updatePedidoDto.cantidad,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
