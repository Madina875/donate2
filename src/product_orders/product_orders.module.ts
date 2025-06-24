import { Module } from "@nestjs/common";
import { ProductOrdersService } from "./product_orders.service";
import { ProductOrdersController } from "./product_orders.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductOrder } from "./entities/product_order.entity";
import { User } from "../user/models/user.model";
import { Product } from "../product/entities/product.entity";
import { Curyer } from "../curyer/models/curyer.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductOrder, User, Product, Curyer])],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
