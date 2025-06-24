import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./entities/product.entity";
import { User } from "../user/models/user.model";
import { Categories } from "../categories/models/categories.model";
import { UserService } from "../user/user.service";
import { CategoriesService } from "../categories/categories.service";

@Module({
  imports: [SequelizeModule.forFeature([Product, User, Categories])],
  controllers: [ProductController],
  providers: [ProductService, UserService, CategoriesService],
  exports: [ProductService],
})
export class ProductModule {}
