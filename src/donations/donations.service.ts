import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Donation } from "./models/donation.model";
import { UserService } from "src/user/user.service";

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(Donation) private donationModel: typeof Donation,
    private usersService: UserService
  ) {}

  async create(createDonationDto: CreateDonationDto) {
    const creator = await this.usersService.findOne(
      createDonationDto.creatorId
    );
    if (!creator || creator.role !== "creator") {
      throw new BadRequestException(
        "The creatorId does not belong to a creator."
      );
    }
    const supporter = await this.usersService.findOne(
      createDonationDto.supporterId
    );
    if (!supporter || supporter.role !== "user") {
      throw new BadRequestException(
        "The specified supporterId does not belong to a supporter."
      );
    }
    const newDonation = await this.donationModel.create(createDonationDto);
    return newDonation;
  }

  findAll() {
    return this.donationModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const donation = this.donationModel.findByPk(id);
    return donation;
  }

  update(id: number, updateDonationDto: UpdateDonationDto) {
    return this.donationModel.update(updateDonationDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const res = await this.donationModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-donation ochirldi`;
    } else {
      return `${id} - Bunday dnoation yoq!`;
    }
  }
}
