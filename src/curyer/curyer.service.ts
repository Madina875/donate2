import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Curyer } from "./models/curyer.model";
import { CreateCuryerDto } from "./dto/create-curyer.dto";
import { UpdateCuryerDto } from "./dto/update-curyer.dto";

@Injectable()
export class CuryerService {
  constructor(@InjectModel(Curyer) private curyerModel: typeof Curyer) {}

  async createCuryer(createCuryerDto: CreateCuryerDto) {
    return this.curyerModel.create(createCuryerDto);
  }

  async getAllCuryer(): Promise<Curyer[]> {
    return this.curyerModel.findAll();
  }

  async getCuryerById(id: number): Promise<Curyer | null> {
    return this.curyerModel.findByPk(id);
  }

  async removeCuryerById(id: number): Promise<string> {
    const res = await this.curyerModel.destroy({ where: { id } });
    if (res > 0) {
      return `curyer with: ${id} id deleted successfully✅`;
    }
    return `curyer with: ${id} id not found`;
  }

  async updateCuryerById(id: number, updateCuryerDto: UpdateCuryerDto) {
    const curyer = await this.curyerModel.update(updateCuryerDto, {
      where: { id },
      returning: true,
    });
    return curyer[1][0];
  }
}
