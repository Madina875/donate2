import { Column, DataType, Model, Table } from "sequelize-typescript"; //

interface ICuryerCreateAttr {
  name: string;
  social_icon: string;
}

@Table({ tableName: "social", timestamps: true }) //
export class Social extends Model<Social, ICuryerCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING(200),
  })
  declare social_icon: string;
}
