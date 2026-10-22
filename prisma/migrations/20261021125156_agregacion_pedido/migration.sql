-- CreateTable
CREATE TABLE "pedidoproducto" (
    "id" SERIAL NOT NULL,
    "idpedido" INTEGER NOT NULL,
    "idproducto" INTEGER NOT NULL,

    CONSTRAINT "pedidoproducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidoproducto_id_key" ON "pedidoproducto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_key" ON "pedido"("id");

-- AddForeignKey
ALTER TABLE "pedidoproducto" ADD CONSTRAINT "pedidoproducto_idpedido_fkey" FOREIGN KEY ("idpedido") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoproducto" ADD CONSTRAINT "pedidoproducto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
