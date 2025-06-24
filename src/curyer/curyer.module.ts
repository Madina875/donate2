import { Module } from "@nestjs/common";
import { CuryerController } from "./curyer.controller";
import { CuryerService } from "./curyer.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Curyer } from "./models/curyer.model";

@Module({
  imports: [SequelizeModule.forFeature([Curyer])],
  controllers: [CuryerController],
  providers: [CuryerService],
})
export class CuryerModule {}
