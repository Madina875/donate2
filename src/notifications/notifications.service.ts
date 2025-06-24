import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Notification } from "./models/notification.model";

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification) private notificationModel: typeof Notification
  ) {}

  create(createNotificationDto: CreateNotificationDto) {
    return this.notificationModel.create(createNotificationDto);
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Notification | null> {
    return this.notificationModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    const notification = await this.notificationModel.update(
      updateNotificationDto,
      { where: { id }, returning: true }
    );
    return notification[1][0];
  }

  async remove(id: number): Promise<string> {
    const res = await this.notificationModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id} id deleted`;
    }
    return `${id} id not found`;
  }
}
