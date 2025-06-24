import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Max, MaxLength, Min } from "class-validator";

export class CreateProductReviewDto {
  @ApiProperty({
    example: 1,
    description: "order id",
  })
  orderId: number;

  @ApiProperty({
    example: 1,
    description: "user id",
  })
  userId: number;

  @ApiProperty({
    example: 1,
    description: "product id",
  })
  productId: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  @ApiProperty({
    example: 5,
    description: "rating",
  })
  rating: number;

  @ApiProperty({
    example: "high",
    description: "comment",
  })
  comment: string;
}
