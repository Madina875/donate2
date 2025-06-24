import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { ProductOrder } from "../../product_orders/entities/product_order.entity";

interface IPaymnetCreationAttr {
  orderId: number;
  userId: number;
  payment_method: string;
  status: string;
  paid_at: string;
}

@Table({ tableName: "payment" })
export class Payment extends Model<Payment, IPaymnetCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "payment id",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => ProductOrder)
  @ApiProperty({
    example: 1,
    description: "order name",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare orderId: number;

  @BelongsTo(() => ProductOrder)
  declare product_order: ProductOrder;

  @ApiProperty({
    example: 1,
    description: "user name",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;
  @BelongsTo(() => User)
  declare user: User;

  @ApiProperty({
    example: "cash",
    description: "payment method cash or card",
  })
  @Column({
    type: DataType.ENUM("cash", "card"),
    defaultValue: "cash",
  })
  declare payment_method: string;

  @ApiProperty({
    example: "cancelles",
    description: "payment status : pending cancelled success",
  })
  @Column({
    type: DataType.ENUM("pending", "cancelled", "success"),
    defaultValue: "pending",
  })
  declare status: string;

  @ApiProperty({
    example: "2010-01-01",
    description: "payment date time",
  })
  @Column({
    type: DataType.DATEONLY,
    defaultValue: new Date(),
  })
  declare paid_at: string;
}
