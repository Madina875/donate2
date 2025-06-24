import { Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Payment } from "./entities/payment.entity";
import { User } from "../user/models/user.model";
import { ProductOrder } from "../product_orders/entities/product_order.entity";

@Module({
  imports: [SequelizeModule.forFeature([Payment, User, ProductOrder])],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
