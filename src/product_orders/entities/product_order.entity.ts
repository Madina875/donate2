import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "../../product/entities/product.entity";
import { User } from "../../user/models/user.model";
import { Curyer } from "../../curyer/models/curyer.model";
import { Payment } from "../../payment/entities/payment.entity";
import { ProductReview } from "../../product_reviews/entities/product_review.entity";

interface IProductOrderCreationAttr {
  buyerId: number;
  productId: number;
  quantity: number;
  total_price: number;
  status: string;
  delivery_address: string;
  phone_number: string;
  curyerId: number;
  delivery_status: string;
}

@Table({ tableName: "product_order" })
export class ProductOrder extends Model<
  ProductOrder,
  IProductOrderCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "order name",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @ApiProperty({
    example: 1,
    description: "buyer name ",
  })
  declare buyerId: number;
  @ForeignKey(() => Product)
  @ApiProperty({
    example: 1,
    description: "product name ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare productId: number;
  @ApiProperty({
    example: 1,
    description: "quantity ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare quantity: number;
  @ApiProperty({
    example: 12,
    description: "total_price ",
  })
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare total_price: number;
  @ApiProperty({
    example: "pending",
    description: "pending or shipped or cancelled or delivered ",
  })
  @Column({
    type: DataType.ENUM("cancelled", "shipped", "delivered", "pending"),
    defaultValue: "pending",
  })
  declare status: string;
  @ApiProperty({
    example: "somewhere",
    description: "location name ",
  })
  @Column({
    type: DataType.STRING,
  })
  declare delivery_address: string;
  @ApiProperty({
    example: "876543",
    description: "phonenumber",
  })
  @Column({
    type: DataType.STRING,
  })
  declare phone_number: string;
  @ForeignKey(() => Curyer)
  @ApiProperty({
    example: 1,
    description: "curyer name ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare curyerId: number;
  @ApiProperty({
    example: "on_the_way",
    description: "delivery status : pending , on_the_way,delivered ",
  })
  @Column({
    type: DataType.ENUM("pending", "on_the_way", "delivered", "cancelled"),
  })
  declare delivery_status: string;

  @BelongsTo(() => Curyer, "curyerId")
  declare curyer: Curyer;
  @BelongsTo(() => Product, "productId")
  declare product: Product;
  @BelongsTo(() => User, "buyerId")
  declare buyer: User;

  @HasMany(() => Payment)
  declare payment: Payment[];

  @HasMany(() => ProductReview)
  declare product_reviews: ProductReview[];
}
