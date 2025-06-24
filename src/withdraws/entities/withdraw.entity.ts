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

export enum StatusSite {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

interface IWithdrawCreationAttr {
  creatorId: number;
  amount: number;
  site_free: string;
  status: StatusSite;
}

@Table({ tableName: "withdraw" })
export class Withdraw extends Model<Withdraw, IWithdrawCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "withdraw name",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: 1,
    description: "creator name",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "CASCADE",
  })
  declare creatorId: number;

  @BelongsTo(() => User)
  declare creator: User;

  @ApiProperty({
    example: 12.0,
    description: "withdraw amount money",
  })
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare amount: number;

  @ApiProperty({
    example: "pending",
    description: "pending rejected or fulfilled",
  })
  @Column({
    type: DataType.ENUM("pending", "rejected", "approved"),
  })
  declare status: "pending" | "rejected" | "approved";
  @ApiProperty({
    example: "site free",
    description: "withdraw site free name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare site_free: string;
}
