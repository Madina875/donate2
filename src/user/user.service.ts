import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }
  async getUserBYEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
    });
    return user?.dataValues;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return user[1][0];
  }

  async remove(id: number): Promise<string> {
    const res = await this.userModel.destroy({ where: { id } });
    if (res > 0) {
      return `curyer with: ${id} id deleted successfully✅`;
    }
    return `curyer with: ${id} id not found`;
  }
}
