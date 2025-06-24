import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "../../product/entities/product.entity";

interface IProductImagesCreationAttr {
  productId: number;
  image_url: string;
  is_main: boolean;
}

@Table({ tableName: "product_images" })
export class ProductImages extends Model<
  ProductImages,
  IProductImagesCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare image_url: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_main: boolean;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare productId: number;

  @BelongsTo(() => Product, "productId")
  declare product: Product;
}
