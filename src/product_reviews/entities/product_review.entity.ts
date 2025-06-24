import { ApiProperty } from "@nestjs/swagger";
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { Product } from "../../product/entities/product.entity";
import { ProductOrder } from "../../product_orders/entities/product_order.entity";

interface IPReviewsCreationAttr {
  userId: number;
  productId: number;
  orderId: number;
  rating: number;
  comment: string;
}

@Table({ tableName: "product_reviews" })
export class ProductReview extends Model<ProductReview, IPReviewsCreationAttr> {
  @ApiProperty({ example: 1, description: "review name" })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: 1, description: "user name" })
  @Column({ type: DataType.INTEGER })
  declare userId: number;
  @BelongsTo(() => User)
  declare user: User;

  @ForeignKey(() => Product)
  @ApiProperty({ example: 1, description: "product name" })
  @Column({ type: DataType.INTEGER })
  declare productId: number;
  @BelongsTo(() => Product)
  declare product: Product;

  @ForeignKey(() => ProductOrder)
  @ApiProperty({ example: 1, description: "order name" })
  @Column({ type: DataType.INTEGER })
  declare orderId: number;
  @BelongsTo(() => ProductOrder)
  declare product_order: ProductOrder;

  @ApiProperty({ example: 5, description: "rating" })
  @Column({ type: DataType.INTEGER })
  declare rating: number;

  @ApiProperty({ example: "great", description: "comment" })
  @Column({ type: DataType.STRING })
  declare comment: string;
}
