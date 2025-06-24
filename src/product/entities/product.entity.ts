import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { Categories } from "../../categories/models/categories.model";
import { ProductImages } from "../../product_images/entities/product_image.entity";
import { ApiProperty } from "@nestjs/swagger";
import { ProductOrder } from "../../product_orders/entities/product_order.entity";
import { ProductReview } from "../../product_reviews/entities/product_review.entity";
// import { ProductImage } from "../../product_images/entities/product_image.entity";

interface IProductCreationattr {
  creatorId: number;
  name: string;
  description: string;
  in_stock: number;
  is_available: boolean;
  price: number;
  categoryId: number;
}

@Table({ tableName: "product" })
export class Product extends Model<Product, IProductCreationattr> {
  @ApiProperty({
    example: 1,
    description: "product name",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare creatorId: number;

  @Column({
    type: DataType.STRING(50),
  })
  declare name: string;

  @ApiProperty({
    example: "this is description of the product",
    description: "product's description",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @ApiProperty({
    example: 1,
    description: "product's in stock",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare in_stock: number;

  @ApiProperty({
    example: true,
    description: "product's availablitiy",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare is_available: boolean;

  @ApiProperty({
    example: 12.0,
    description: "product's price",
  })
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare price: number;

  @ForeignKey(() => Categories)
  @Column({
    type: DataType.INTEGER,
  })
  declare categoryId: number;

  @HasMany(() => ProductImages)
  declare product_images: ProductImages[];

  @BelongsTo(() => Categories, "categoryId")
  declare categories: Categories;

  @BelongsTo(() => User, "creatorId")
  declare creator: User;

  @HasMany(() => ProductOrder)
  declare product_order: ProductOrder[];

  @HasMany(() => ProductReview)
  declare product_reviews: ProductReview[];
}
