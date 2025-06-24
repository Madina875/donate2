import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

export enum PaymentMethod {
  CARD = "card",
  CASH = "cash",
}

export class CreateDonationDto {
  @ApiProperty({
    example: 1,
    description: "donation name",
  })
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;
  @ApiProperty({
    example: 1,
    description: "supporter name in id",
  })
  @IsNumber()
  @IsNotEmpty()
  supporterId: number;
  @ApiProperty({
    example: 110.0,
    description: "amount",
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @ApiProperty({
    example: "asdfgh",
    description: "message",
  })
  @IsString()
  @IsNotEmpty()
  message: string;
  @ApiProperty({
    example: "cash",
    description: "payment method ",
  })
  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;
  @ApiProperty({
    example: true,
    description: "is anonymouns",
  })
  @IsBoolean()
  @IsNotEmpty()
  is_anonymous: boolean;
}
