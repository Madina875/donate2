import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { Admin } from "./models/admin.model";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { JwtSelfGuard } from "../common/guards/jwt-self.guard";
import { Roles } from "../common/decorators/roles.decorator";

@ApiTags("Admins")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "admin yaratish" })
  @ApiResponse({
    status: 201,
    description: "creating ",
    type: Admin,
  })
  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "adminlar royhati" })
  @ApiResponse({
    status: 200,
    description: "list admins",
    type: [Admin],
  })
  @Get()
  async getallAdmin(): Promise<Admin[]> {
    return this.adminService.getAllAdmin();
  }

  @Roles("admin")
  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "admin korish" })
  @ApiResponse({
    status: 200,
    description: "get one admin",
    type: Admin,
  })
  @Get(":id")
  async getAdminById(@Param("id") id: number): Promise<Admin | null> {
    return this.adminService.getAdminById(id);
  }

  @ApiOperation({ summary: "admin ochirish" })
  @ApiResponse({
    status: 201,
    description: "delete admin",
  })
  @Delete(":id")
  async removeAdminById(@Param("id") id: number): Promise<string> {
    return this.adminService.removeadminById(id);
  }

  @ApiOperation({ summary: "admin yaratish" })
  @ApiResponse({
    status: 201,
    description: "update admin",
    type: Admin,
  })
  @Patch(":id")
  async updateAdminById(
    @Param("id") id: number,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.updateAdminById(id, updateAdminDto);
  }
}
