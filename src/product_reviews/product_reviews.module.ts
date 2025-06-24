import { Module } from "@nestjs/common";
import { ProductReviewsService } from "./product_reviews.service";
import { ProductReviewsController } from "./product_reviews.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductReview } from "./entities/product_review.entity";
import { User } from "../user/models/user.model";
import { Product } from "../product/entities/product.entity";
import { ProductOrder } from "../product_orders/entities/product_order.entity";

@Module({
  imports: [
    SequelizeModule.forFeature([ProductReview, User, Product, ProductOrder]),
  ],
  controllers: [ProductReviewsController],
  providers: [ProductReviewsService],
  exports: [ProductReviewsService],
})
export class ProductReviewsModule {}
