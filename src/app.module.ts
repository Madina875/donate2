import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { CuryerModule } from "./curyer/curyer.module";
import { Curyer } from "./curyer/models/curyer.model";
import { CategoriesModule } from "./categories/categories.module";
import { Categories } from "./categories/models/categories.model";
import { Social } from "./social/models/social.model";
import { SocialModule } from "./social/social.module";
import { UserModule } from "./user/user.module";
import { DonationsModule } from "./donations/donations.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { User } from "./user/models/user.model";
import { Notification } from "./notifications/models/notification.model";
import { Donation } from "./donations/models/donation.model";
import { ProductModule } from "./product/product.module";
import { ProductImagesModule } from "./product_images/product_images.module";
import { Product } from "./product/entities/product.entity";
import { ProductImages } from "./product_images/entities/product_image.entity";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/entities/role.entity";
import { AdminRole } from "./admin/models/admin-role.entity";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { Withdraw } from "./withdraws/entities/withdraw.entity";
import { WithdrawsModule } from "./withdraws/withdraws.module";
import { SaveItemsModule } from "./save_items/save_items.module";
import { SaveItem } from "./save_items/entities/save_item.entity";
import { ProductOrdersModule } from "./product_orders/product_orders.module";
import { ProductOrder } from "./product_orders/entities/product_order.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"), //static pictures
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Admin,
        Curyer,
        Categories,
        Social,
        User,
        Notification,
        Donation,
        Product,
        ProductImages,
        Role,
        AdminRole,
        Withdraw,
        SaveItem,
        ProductOrder,
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: false },
    }),
    AdminModule,
    CuryerModule,
    CategoriesModule,
    SocialModule,
    UserModule,
    DonationsModule,
    NotificationsModule,
    ProductModule,
    ProductImagesModule,
    RolesModule,
    AuthModule,
    FilesModule,
    WithdrawsModule,
    SaveItemsModule,
    ProductOrdersModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

/*
If you add a new column to your model, Sequelize will automatically add it to the database
Your database schema stays in sync with your code
No manual SQL commands needed

*/
