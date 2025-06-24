import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"; //
import { Product } from "../../product/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";

interface ICategoriesCreateAttr {
  name: string;
}

@Table({ tableName: "categories", timestamps: true }) //
export class Categories extends Model<Categories, ICategoriesCreateAttr> {
  @ApiProperty({
    example: 1,
    description: "category name",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "house-chores",
    description: "category name",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @HasMany(() => Product)
  declare product: Product[];
}
