import { Module } from "@nestjs/common";
import { WithdrawsService } from "./withdraws.service";
import { WithdrawController } from "./withdraws.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Withdraw } from "./entities/withdraw.entity";
import { User } from "../user/models/user.model";

@Module({
  imports: [SequelizeModule.forFeature([Withdraw, User])],
  controllers: [WithdrawController],
  providers: [WithdrawsService],
  exports: [WithdrawsService],
})
export class WithdrawsModule {}
