import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { Notification } from "./models/notification.model";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("notifications")
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiOperation({ summary: "notification yaratish" })
  @ApiResponse({
    status: 201,
    description: "creating notification",
    type: Notification,
  })
  @Post()
  async create(
    @Body() createNotificationDto: CreateNotificationDto
  ): Promise<Notification> {
    return this.notificationsService.create(createNotificationDto);
  }

  @ApiOperation({ summary: "notifications list" })
  @ApiResponse({
    status: 201,
    description: "list of notifications",
    type: [Notification],
  })
  @Get()
  async getallAdmin(): Promise<Notification[]> {
    return this.notificationsService.findAll();
  }

  @ApiOperation({ summary: "notification korish id boyicha" })
  @ApiResponse({
    status: 201,
    description: "notification info ",
    type: Notification,
  })
  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Notification | null> {
    return this.notificationsService.findOne(id);
  }

  @ApiOperation({ summary: "update notification" })
  @ApiResponse({
    status: 201,
    description: "update notification",
    type: Notification,
  })
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.update(id, updateNotificationDto);
  }

  @ApiOperation({ summary: "remove notification" })
  @ApiResponse({
    status: 201,
    description: "notification ochirish",
  })
  @Delete(":id")
  remove(@Param("id") id: number): Promise<string> {
    return this.notificationsService.remove(id);
  }
}
