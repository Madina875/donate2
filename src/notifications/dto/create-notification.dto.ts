import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty({
    example: 1,
    description: "id of the user",
  })
  @IsNumber()
  userId: number;
  @ApiProperty({
    example: "sdfg",
    description: "notification message",
  })
  @IsString()
  message: string;
}
