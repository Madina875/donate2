import { Injectable } from "@nestjs/common";
import { CreateSaveItemDto } from "./dto/create-save_item.dto";
import { UpdateSaveItemDto } from "./dto/update-save_item.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SaveItem } from "./entities/save_item.entity";

@Injectable()
export class SaveItemsService {
  constructor(@InjectModel(SaveItem) private saveItemModel: typeof SaveItem) {}

  async create(createSaveItemDto: CreateSaveItemDto) {
    return this.saveItemModel.create(createSaveItemDto);
  }

  async findAll() {
    return this.saveItemModel.findAll();
  }

  async findOne(id: number) {
    return this.saveItemModel.findByPk(id);
  }

  async update(id: number, updateSaveItemDto: UpdateSaveItemDto) {
    const item = await this.saveItemModel.update(updateSaveItemDto, {
      where: { id },
      returning: true,
    });
    return item[1][0];
  }

  async remove(id: number) {
    const res = await this.saveItemModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id} id deleted`;
    }
    return `${id} id not found`;
  }
}
