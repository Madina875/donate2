import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { UserService } from "../user/user.service";
import { CategoriesService } from "../categories/categories.service";

@Controller("product")
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
    private readonly categoryService: CategoriesService
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const { creatorId } = createProductDto;
    const { categoryId } = createProductDto;
    const creator = await this.userService.findOne(creatorId);
    if (!creator) {
      throw new BadRequestException("Bunday creator mavjud emas");
    }
    const category = await this.categoryService.getCategoriesById(categoryId);
    if (!category) {
      throw new BadRequestException("Bunday category mavjud emas");
    }
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
