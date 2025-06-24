import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Donation } from "./models/donation.model";

@Controller("donation")
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @ApiOperation({ summary: "donation yaratish" })
  @ApiResponse({
    status: 201,
    description: " creating dotation",
    type: Donation,
  })
  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto);
  }

  @ApiOperation({ summary: "donationlarini korish" })
  @ApiResponse({
    status: 201,
    description: "donations list",
    type: [Donation],
  })
  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @ApiOperation({ summary: "donation malumotini korish" })
  @ApiResponse({
    status: 201,
    description: "bitta donationni korish",
    type: Donation,
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.donationsService.findOne(id);
  }

  @ApiOperation({ summary: "donationni yangilash" })
  @ApiResponse({
    status: 201,
    description: "updating donation",
    type: Donation,
  })
  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body() updateDonationDto: UpdateDonationDto
  ) {
    return this.donationsService.update(id, updateDonationDto);
  }

  @ApiOperation({ summary: "donationni ochirish" })
  @ApiResponse({
    status: 201,
    description: "donationni ochirish",
  })
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.donationsService.remove(id);
  }
}
