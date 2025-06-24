import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber } from "class-validator";

export enum PaymentStatus {
  PENDING = "pending",
  CANCELLED = "cancelled",
  SUCCESS = "success",
}

export enum PaymentMethod {
  CASH = "cash",
  CARD = "card",
}

export class CreatePaymentDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "order name",
  })
  orderId: number;
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "user name",
  })
  userId: number;
  @ApiProperty({
    example: "2010-01-01",
    description: "payment date",
  })
  paid_at: string;
  @IsEnum(PaymentStatus)
  @ApiProperty({
    example: "payed",
    description: "payment status",
  })
  status: PaymentStatus;
  @IsEnum(PaymentMethod)
  @ApiProperty({
    example: "cash",
    description: "payment method",
  })
  payment_method: PaymentMethod;
}
