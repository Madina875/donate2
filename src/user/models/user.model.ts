import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Notification } from "../../notifications/models/notification.model";
import { Donation } from "src/donations/models/donation.model";
import { Product } from "../../product/entities/product.entity";
export enum userRole {
  CREATOR = "creator",
  USER = "user",
}
interface IUserCreateAattr {
  full_name: string;
  phone_number: string;
  email: string;
  password_hash?: string;
  role?: userRole;
  boi?: string;
  avatar_url?: string;
  banner_url?: string;
}

@Table({ tableName: "user" })
export class User extends Model<User, IUserCreateAattr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone_number: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password_hash: string;

  @Column({
    type: DataType.ENUM("creator", "user"),
  })
  declare role: "creator" | "user";

  @Column({
    type: DataType.STRING,
  })
  declare boi: string;

  @Column({
    type: DataType.STRING,
  })
  declare avatar_url: string;

  @Column({
    type: DataType.STRING,
  })
  declare banner_url: string;

  @HasMany(() => Notification)
  declare notifications: Notification[];

  @HasMany(() => Donation)
  declare donation: Donation[];

  @HasMany(() => Product)
  declare product: Product[];
}
