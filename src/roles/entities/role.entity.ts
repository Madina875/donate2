import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "src/admin/models/admin.model";
import { AdminRole } from "../../admin/models/admin-role.entity";

interface IRoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "role" })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, unique: true })
  declare value: string;

  @Column({ type: DataType.STRING })
  declare description: string;

  @BelongsToMany(() => Admin, () => AdminRole)
  declare admin: Admin[];
}
