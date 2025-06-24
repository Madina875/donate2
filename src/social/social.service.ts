import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./models/social.model";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private socilaModel: typeof Social) {}

  createSocial(createSocialDto: CreateSocialDto) {
    return this.socilaModel.create(createSocialDto);
  }

  async getAllSocial(): Promise<Social[]> {
    return this.socilaModel.findAll();
  }
  async getSocialById(id: number): Promise<Social | null> {
    return this.socilaModel.findByPk(id);
  }
  async removeSocialById(id: number): Promise<string> {
    const res = await this.socilaModel.destroy({ where: { id } });
    if (res > 0) {
      return `social with ${id} id deleted succcessfully✅`;
    }
    return `social with ${id} id not found`;
  }

  async updateSocialById(id: number, updatesocialDto: UpdateSocialDto) {
    const social = await this.socilaModel.update(updatesocialDto, {
      where: { id },
      returning: true,
    });
    return social[1][0];
  }
}
