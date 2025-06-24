import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AdminModule } from "../admin/admin.module";
import { JwtModule } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
console.log(process.env.SECRET_KEY);

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),

    AdminModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
