import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript"; //
import { AdminRole } from "src/admin/models/admin-role.entity";
import { Role } from "src/roles/entities/role.entity";

interface IAdminCreateAttr {
  full_name: string;
  phone_number: string;
  email: string;
  password_hash: string;
  address: string;
  is_active: boolean;
}

@Table({ tableName: "admin", timestamps: true }) //
export class Admin extends Model<Admin, IAdminCreateAttr> {
  @ApiProperty({
    example: 1,
    description: "admin name",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user",
    description: "admin name",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare full_name: string;

  @ApiProperty({
    example: "1234567",
    description: "admin raqami",
  })
  @Column({
    type: DataType.STRING(15),
  })
  declare phone_number: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "admin emaili",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare email: string;

  @ApiProperty({
    example: "123456jhgfd",
    description: "admin paroli",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare password_hash: string;

  @ApiProperty({
    example: "johnsons street",
    description: "admin adresi",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare address: string;

  @ApiProperty({
    example: true,
    description: "admin holati ",
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  declare is_active: boolean;

  @BelongsToMany(() => Role, () => AdminRole)
  declare role: Role[];
}
