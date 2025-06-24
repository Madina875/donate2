import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

export enum StatusSite {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export class CreateWithdrawDto {
  @ApiProperty({
    example: 1,
    description: "creators name (id)",
  })
  @IsNumber()
  creatorId: number;

  @ApiProperty({
    example: 12,
    description: "save-item amount money",
  })
  amount: number;

  @IsEnum(StatusSite)
  status: StatusSite;
  @ApiProperty({
    example: "site free",
    description: "site free",
  })
  @IsString()
  site_free: string;
}
