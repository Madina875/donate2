import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  isEnum,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export enum VehicleType {
  MOTORCYCLE = "motorcycle",
  BICYCLE = "bicycle",
  CAR = "car",
  VAN = "van",
}

export class CreateCuryerDto {
  @ApiProperty({
    example: "user",
    description: "curyer name",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @ApiProperty({
    example: "876543",
    description: "curyer raqami",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @ApiProperty({
    example: "user@gmail.com",
    description: "curyer email",
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    example: "1234567kjhgf",
    description: "curyer email paroli",
  })
  @IsStrongPassword({ minLength: 10 })
  password_hash: string;
  @ApiProperty({
    example: "users street ",
    description: "curyer manzili",
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum(VehicleType)
  vehicle_type: VehicleType;
}
