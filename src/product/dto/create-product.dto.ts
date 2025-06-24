import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    example: 1,
    description: "product's creator id",
  })
  @IsNumber()
  creatorId: number;
  @ApiProperty({
    example: "t-shirt",
    description: "product's name",
  })
  @IsString()
  name: string;
  @ApiProperty({
    example: "this is simple description",
    description: "product's description",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    example: 1,
    description: "product's in stock",
  })
  @IsNumber()
  in_stock: number;
  @ApiProperty({
    example: true,
    description: "product's availablity",
  })
  @IsBoolean()
  is_available: boolean;
  @ApiProperty({
    example: 1200.0,
    description: "product's price",
  })
  @IsNotEmpty()
  price: number;
  @ApiProperty({
    example: 1,
    description: "product's category id",
  })
  @IsNumber()
  categoryId: number;
}
