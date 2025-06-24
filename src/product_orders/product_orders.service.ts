import { Injectable } from "@nestjs/common";
import { CreateProductOrderDto } from "./dto/create-product_order.dto";
import { UpdateProductOrderDto } from "./dto/update-product_order.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductOrder } from "./entities/product_order.entity";

@Injectable()
export class ProductOrdersService {
  constructor(
    @InjectModel(ProductOrder)
    private readonly productOrderModel: typeof ProductOrder
  ) {}
  
  create(createProductOrderDto: CreateProductOrderDto) {
    return this.productOrderModel.create(createProductOrderDto);
  }

  findAll() {
    return this.productOrderModel.findAll();
  }

  findOne(id: number) {
    return this.productOrderModel.findByPk(id);
  }

  async update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    const order = await this.productOrderModel.update(updateProductOrderDto, {
      where: { id },
      returning: true,
    });
    return order[1][0];
  }

  remove(id: number) {
    return this.productOrderModel.destroy({ where: { id } });
  }
}

