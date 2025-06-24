import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WithdrawsService } from "./withdraws.service";
import { Withdraw } from "./entities/withdraw.entity";
import { CreateWithdrawDto } from "./dto/create-withdraw.dto";
import { UpdateWithdrawDto } from "./dto/update-withdraw.dto";

@ApiTags("withdraws")
@Controller("withdraw")
export class WithdrawController {
  constructor(private readonly withdrawService: WithdrawsService) {}

  @ApiOperation({ summary: "creating withdraw" })
  @ApiResponse({
    status: 201,
    description: "creating withdraw",
    type: Withdraw,
  })
  @Post()
  create(@Body() createWithdrawDto: CreateWithdrawDto) {
    return this.withdrawService.create(createWithdrawDto);
  }

  @ApiOperation({ summary: "get lists of withdraw" })
  @ApiResponse({
    status: 200,
    description: "get all saved withdraw",
    type: [Withdraw],
  })
  @Get()
  findAll() {
    return this.withdrawService.findAll();
  }

  @ApiOperation({ summary: "get info about one saved withdraw" })
  @ApiResponse({
    status: 201,
    description: "get one saved items info ",
    type: Withdraw,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.withdrawService.findOne(+id);
  }

  @ApiOperation({ summary: "update one withdraw" })
  @ApiResponse({
    status: 200,
    description: "get one withdraw and update",
    type: Withdraw,
  })
  @Get(":id")
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateWithdrawDto: UpdateWithdrawDto
  ) {
    return this.withdrawService.update(+id, updateWithdrawDto);
  }

  @ApiOperation({ summary: "delete one withdraw info" })
  @ApiResponse({
    status: 201,
    description: "remove one withdraw info",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.withdrawService.remove(+id);
  }
}
