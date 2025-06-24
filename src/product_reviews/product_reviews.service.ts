import { Injectable } from "@nestjs/common";
import { CreateProductReviewDto } from "./dto/create-product_review.dto";
import { UpdateProductReviewDto } from "./dto/update-product_review.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductReview } from "./entities/product_review.entity";

@Injectable()
export class ProductReviewsService {
  constructor(
    @InjectModel(ProductReview)
    private readonly productreviewModel: typeof ProductReview
  ) {}
  create(createProductReviewDto: CreateProductReviewDto) {
    return this.productreviewModel.create(createProductReviewDto);
  }

  findAll() {
    return this.productreviewModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} productReview`;
  }

  update(id: number, updateProductReviewDto: UpdateProductReviewDto) {
    return `This action updates a #${id} productReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReview`;
  }
}
