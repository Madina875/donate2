import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateProductImageDto {
  @IsNumber()
  @Type(() => Number)
  productId: number;
  @IsBoolean()
  @Type(() => Boolean)
  is_main: boolean;
}
