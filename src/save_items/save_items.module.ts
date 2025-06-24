import { Module } from "@nestjs/common";
import { SaveItemsService } from "./save_items.service";
import { SaveItemsController } from "./save_items.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { SaveItem } from "./entities/save_item.entity";
import { User } from "../user/models/user.model";
import { Product } from "../product/entities/product.entity";

@Module({
  imports: [SequelizeModule.forFeature([SaveItem, User, Product])],
  controllers: [SaveItemsController],
  providers: [SaveItemsService],
  exports: [SaveItemsService],
})
export class SaveItemsModule {}
