import { Module } from "@nestjs/common";
import { SocialController } from "./social.controller";
import { SocialService } from "./social.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Social } from "./models/social.model";

@Module({
  imports: [SequelizeModule.forFeature([Social])],
  controllers: [SocialController],
  providers: [SocialService],
})
export class SocialModule {}
