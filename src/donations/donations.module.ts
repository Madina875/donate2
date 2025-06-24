import { Module } from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { DonationsController } from "./donations.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Donation } from "./models/donation.model";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";

@Module({
  imports: [SequelizeModule.forFeature([Donation, User])],
  controllers: [DonationsController],
  providers: [DonationsService, UserService],
  exports: [DonationsService],
})
export class DonationsModule {}
