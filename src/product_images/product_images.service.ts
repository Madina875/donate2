import { Injectable } from "@nestjs/common";
import { CreateProductImageDto } from "./dto/create-product_image.dto";
import { UpdateProductImageDto } from "./dto/update-product_image.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductImages } from "./entities/product_image.entity";
import { FilesService } from "../files/files.service";

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectModel(ProductImages)
    private readonly porductImagesModel: typeof ProductImages,
    private readonly fileService: FilesService
  ) {}

  async create(createProductImageDto: CreateProductImageDto, image_url: any) {
    const fileName = await this.fileService.saveFile(image_url);
    return this.porductImagesModel.create({
      ...createProductImageDto,
      image_url: fileName,
    });
  }

  findAll() {
    return this.porductImagesModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} productImage`;
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return `This action updates a #${id} productImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productImage`;
  }
}
