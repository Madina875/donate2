import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Payment } from "./entities/payment.entity";

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private readonly paymentModel: typeof Payment
  ) {}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentModel.create(createPaymentDto);
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
