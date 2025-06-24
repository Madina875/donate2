import { Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Notification } from "./models/notification.model";
import { User } from "../user/models/user.model";

@Module({
  imports: [SequelizeModule.forFeature([Notification, User])], //
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService], //
})
export class NotificationsModule {}
