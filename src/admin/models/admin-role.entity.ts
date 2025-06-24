import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "src/admin/models/admin.model";
import { Role } from "../../roles/entities/role.entity";

interface IRoleCreationAttr {
  adminId: number;
  roleId: number;
}

@Table({ tableName: "admin_roles" })
export class AdminRole extends Model<AdminRole, IRoleCreationAttr> {
  @ForeignKey(() => Admin)
  @Column({ type: DataType.STRING })
  declare adminId: string;
  @ForeignKey(() => Role)
  @Column({ type: DataType.STRING })
  declare roleId: string;
}
