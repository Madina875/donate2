import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SaveItemsService } from "./save_items.service";
import { CreateSaveItemDto } from "./dto/create-save_item.dto";
import { UpdateSaveItemDto } from "./dto/update-save_item.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SaveItem } from "./entities/save_item.entity";

@ApiTags("Saved items")
@Controller("save_items")
export class SaveItemsController {
  constructor(private readonly saveItemsService: SaveItemsService) {}

  @ApiOperation({ summary: "creating save -items" })
  @ApiResponse({
    status: 201,
    description: "creating save items",
    type: SaveItem,
  })
  @Post()
  create(@Body() createSaveItemDto: CreateSaveItemDto) {
    return this.saveItemsService.create(createSaveItemDto);
  }

  @ApiOperation({ summary: "get lists of saved items" })
  @ApiResponse({
    status: 200,
    description: "get all saved items",
    type: [SaveItem],
  })
  @Get()
  findAll() {
    return this.saveItemsService.findAll();
  }

  @ApiOperation({ summary: "get info about one saved item" })
  @ApiResponse({
    status: 201,
    description: "get one saved items info ",
    type: SaveItem,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.saveItemsService.findOne(+id);
  }

  @ApiOperation({ summary: "update one saved item" })
  @ApiResponse({
    status: 200,
    description: "get one saved item update",
    type: SaveItem,
  })
  @Get(":id")
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSaveItemDto: UpdateSaveItemDto
  ) {
    return this.saveItemsService.update(+id, updateSaveItemDto);
  }

  @ApiOperation({ summary: "delete one saved info" })
  @ApiResponse({
    status: 201,
    description: "remove one saved info",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.saveItemsService.remove(+id);
  }
}
