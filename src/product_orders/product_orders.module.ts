import { Module } from "@nestjs/common";
import { ProductOrdersService } from "./product_orders.service";
import { ProductOrdersController } from "./product_orders.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductOrder } from "./entities/product_order.entity";

@Module({
  imports: [SequelizeModule.forFeature([ProductOrder])],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
