import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CuryerService } from "./curyer.service";
import { CreateCuryerDto } from "./dto/create-curyer.dto";
import { Curyer } from "./models/curyer.model";
import { UpdateCuryerDto } from "./dto/update-curyer.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("curyer")
export class CuryerController {
  constructor(private readonly curyerService: CuryerService) {}

  @ApiOperation({ summary: "curyer yaratish" })
  @ApiResponse({
    status: 201,
    description: "creating curyer",
    type: Curyer,
  })
  @Post()
  async createCuryer(
    @Body() createCuryerDto: CreateCuryerDto
  ): Promise<Curyer> {
    return this.curyerService.createCuryer(createCuryerDto);
  }

  @ApiOperation({ summary: "kuryerlarni korish" })
  @ApiResponse({
    status: 201,
    description: "curyerlarni korish",
    type: [Curyer],
  })
  @Get()
  async getAllCuryer(): Promise<Curyer[]> {
    return this.curyerService.getAllCuryer();
  }

  @ApiOperation({ summary: "curyerni malumotlarini korish" })
  @ApiResponse({
    status: 201,
    description: "curyer info",
    type: Curyer,
  })
  @Get(":id")
  async getCuryerById(@Param("id") id: number): Promise<Curyer | null> {
    return this.curyerService.getCuryerById(id);
  }
  @ApiOperation({ summary: "curyerni ochirish" })
  @ApiResponse({
    status: 201,
    description: "curyerni ochirish ",
  })
  @Delete(":id")
  async removeCuryerById(@Param("id") id: number): Promise<string> {
    return this.curyerService.removeCuryerById(id);
  }

  @ApiOperation({ summary: "curyerni yagnilash" })
  @ApiResponse({
    status: 201,
    description: "curyer updating",
    type: Curyer,
  })
  @Patch(":id")
  async updateCuryerById(
    @Param("id") id: number,
    @Body() updateCuryerDto: UpdateCuryerDto
  ) {
    return this.curyerService.updateCuryerById(id, updateCuryerDto);
  }
}
