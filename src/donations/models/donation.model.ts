import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { User } from "../../user/models/user.model";
import { ApiProperty } from "@nestjs/swagger";

export enum PaymentMethod {
  CARD = "card",
  CASH = "cash",
}

interface IDonationCreationAttr {
  creatorId: number;
  supporterId: number;
  amount: number;
  message: string;
  payment_method: PaymentMethod;
  is_anonymous: boolean;
}

@Table({ tableName: "donation" })
export class Donation extends Model<Donation, IDonationCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "donation name",
  })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare creatorId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare supporterId: number;

  @ApiProperty({
    example: 1200.0,
    description: "donation money amount",
  })
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare amount: number;

  @ApiProperty({
    example: "sdfghjk",
    description: "curyer message",
  })
  @Column({
    type: DataType.STRING,
  })
  declare message: string;

  @ApiProperty({
    example: "cash",
    description: "payment method",
  })
  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
  })
  declare payment_method: PaymentMethod;

  @ApiProperty({
    example: true,
    description: "is  anonymous",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_anonymous: boolean;

  @BelongsTo(() => User, "creatorId")
  declare creator: User;

  @BelongsTo(() => User, "supporterId")
  declare supporter: User;
}
