import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript"; //

interface ICuryerCreateAttr {
  full_name: string;
  phone_number: string;
  email: string;
  password_hash: string;
  address: string;
  vehicle_type: "motorcycle" | "bicycle" | "car" | "van";
}

@Table({ tableName: "curyer", timestamps: true }) //
export class Curyer extends Model<Curyer, ICuryerCreateAttr> {
  @ApiProperty({
    example: 1,
    description: "curyer name",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user",
    description: "curyer name",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare full_name: string;

  @ApiProperty({
    example: "876543654",
    description: "curyer raqami",
  })
  @Column({
    type: DataType.STRING(15),
  })
  declare phone_number: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "curyer emaili",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare email: string;

  @ApiProperty({
    example: "user234567",
    description: "curyer paroli",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare password_hash: string;

  @ApiProperty({
    example: "user's streeet ",
    description: "curyer manzili",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare address: string;

  @ApiProperty({
    example: "car",
    description: "curyer nimada kelish ketishi",
  })
  @Column({
    type: DataType.ENUM("motorcycle", "bicycle", "car", "van"),
  })
  declare vehicle_type: "motorcycle" | "bicycle" | "car" | "van";
}
