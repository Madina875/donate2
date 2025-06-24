import { Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { Admin } from "./models/admin.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/entities/role.entity";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { JwtRolesGuard } from "../common/guards/jwt-role.guard";
import { Roles } from "../common/decorators/roles.decorator";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private readonly roleService: RolesService
  ) {}

  @Roles("admin")
  // @Roles("user")
  @UseGuards(JwtRolesGuard)
  @UseGuards(JwtAuthGuard)
  async createAdmin(createAdminDto: CreateAdminDto) {
    const role = await this.roleService.findRoleBYValue(createAdminDto.value);
    if (!role) {
      throw new NotFoundException("Bunday role yoq");
      // throw new HttpException("Bunday role yoq", HttpStatus.NOT_FOUND);
    }
    const admin = await this.adminModel.create(createAdminDto);
    await admin.$set("role", [role.id]); //UserRole.create(userId,roleId)
    await admin.save();

    return admin;
  }

  async getAllAdmin(): Promise<Admin[]> {
    return this.adminModel.findAll({
      include: {
        model: Role,
        attributes: ["id", "value"],
        through: { attributes: [] },
      },
    });
  }

  async getAdminById(id: number): Promise<Admin | null> {
    return this.adminModel.findByPk(id);
  }

  async getAdminBYEmail(email: string) {
    const admin = await this.adminModel.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ["id", "value"],
        through: { attributes: [] },
      },
    });
    return admin?.dataValues;
  }

  async removeadminById(id: number): Promise<string> {
    const res = await this.adminModel.destroy({ where: { id } });

    if (res > 0) {
      return `company with ${id} id deleted successfully✅`;
    }
    return ` company with ${id} id not found`;
  }

  async updateAdminById(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return admin[1][0];
  }
}
