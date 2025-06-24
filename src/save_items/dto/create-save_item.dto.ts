import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, } from "class-validator";

export enum StatusSite {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export class CreateSaveItemDto {
  @ApiProperty({
    example: 1,
    description: "user name (id)",
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: 12,
    description: "productId",
  })
  productId: number;
}
