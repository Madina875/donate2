import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Withdraw } from "./entities/withdraw.entity";
import { CreateWithdrawDto } from "./dto/create-withdraw.dto";
import { UpdateWithdrawDto } from "./dto/update-withdraw.dto";
@Injectable()
export class WithdrawsService {
  constructor(@InjectModel(Withdraw) private withdrawModel: typeof Withdraw) {}

  async create(createWithdrawDto: CreateWithdrawDto) {
    return this.withdrawModel.create(createWithdrawDto);
  }

  async findAll() {
    return this.withdrawModel.findAll();
  }

  async findOne(id: number) {
    return this.withdrawModel.findByPk(id);
  }

  async update(id: number, updateWithdrawDto: UpdateWithdrawDto) {
    const item = await this.withdrawModel.update(updateWithdrawDto, {
      where: { id },
      returning: true,
    });
    return item[1][0];
  }

  async remove(id: number) {
    const res = await this.withdrawModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id} id deleted`;
    }
    return `${id} id not found`;
  }
}
