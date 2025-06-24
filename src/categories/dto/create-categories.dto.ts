import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriesDto {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
