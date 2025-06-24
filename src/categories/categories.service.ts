import { Injectable } from "@nestjs/common";
import { Categories } from "./models/categories.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { UpdateCategoriesDto } from "./dto/update-categories.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories) private categoriesModel: typeof Categories
  ) {}

  createCategories(createCategoriesDto: CreateCategoriesDto) {
    return this.categoriesModel.create(createCategoriesDto);
  }

  async getAllCategories(): Promise<Categories[]> {
    return this.categoriesModel.findAll();
  }

  async getCategoriesById(id: number): Promise<Categories | null> {
    return this.categoriesModel.findByPk(id);
  }

  async removecategoriesById(id: number): Promise<string> {
    const res = await this.categoriesModel.destroy({ where: { id } });

    if (res > 0) {
      return `categories with ${id} id deleted successfully✅`;
    }
    return ` categories with ${id} id not found`;
  }

  async updateCategoriesById(
    id: number,
    updatecategoriesDto: UpdateCategoriesDto
  ) {
    const categories = await this.categoriesModel.update(updatecategoriesDto, {
      where: { id },
      returning: true,
    });
    return categories[1][0];
  }
}
