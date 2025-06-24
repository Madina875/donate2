import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { ApiProperty } from "@nestjs/swagger";

interface INotificationCreationAttr {
  userId: number;
  message?: string;
}

@Table({ tableName: "notifications" })
export class Notification extends Model<
  Notification,
  INotificationCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "notification id",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id?: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @ApiProperty({
    example: "gfds",
    description: "notification message",
  })
  @Column({
    type: DataType.STRING,
  })
  declare message?: string;
}
