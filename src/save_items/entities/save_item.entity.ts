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
import { Product } from "../../product/entities/product.entity";

interface ISaveItemsCreationAttr {
  userId: number;
  productId: number;
}

@Table({ tableName: "save_items" })
export class SaveItem extends Model<SaveItem, ISaveItemsCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "save item name",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: 1,
    description: "usr name",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "CASCADE",
  })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @ForeignKey(() => Product)
  @ApiProperty({
    example: 1,
    description: "productId",
  })
  @Column({
    type: DataType.INTEGER,
    onDelete: "CASCADE",
  })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;
}
