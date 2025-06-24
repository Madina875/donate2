import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { Categories } from "./models/categories.model";
import { UpdateCategoriesDto } from "./dto/update-categories.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

// @ApiTags("")
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: "category yaratish" })
  @ApiResponse({
    status: 201,
    description: "creating category",
    type: Categories,
  })
  @Post()
  async createCategories(
    @Body() createCategoriesDto: CreateCategoriesDto
  ): Promise<Categories> {
    return this.categoriesService.createCategories(createCategoriesDto);
  }

  @ApiOperation({ summary: "category larni korish" })
  @ApiResponse({
    status: 200,
    description: "see all category ",
    type: [Categories],
  })
  @Get()
  async getallCategories(): Promise<Categories[]> {
    return this.categoriesService.getAllCategories();
  }

  @ApiOperation({ summary: "category korish" })
  @ApiResponse({
    status: 201,
    description: "get categorory by id",
    type: Categories,
  })
  @Get(":id")
  async getCategoriesById(@Param("id") id: number): Promise<Categories | null> {
    return this.categoriesService.getCategoriesById(id);
  }

  @ApiOperation({ summary: "remove category" })
  @ApiResponse({
    status: 201,
    description: "remove category  ",
  })
  @Delete(":id")
  async removeAdminById(@Param("id") id: number): Promise<string> {
    return this.categoriesService.removecategoriesById(id);
  }

  @ApiOperation({ summary: " update category" })
  @ApiResponse({
    status: 201,
    description: "update Category ",
    type: Categories,
  })
  @Patch(":id")
  async updateCategoriesById(
    @Param("id") id: number,
    @Body() updateCategoriesDto: UpdateCategoriesDto
  ) {
    return this.categoriesService.updateCategoriesById(id, updateCategoriesDto);
  }
}
