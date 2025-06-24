import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @ApiProperty({
    example: "996322222",
    description: "Foydalanuvchi raqami",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @ApiProperty({
    example: "ASDF23456",
    description: "Foydalanuvchi paroli",
  })
  @IsNotEmpty()
  // @IsStrongPassword({ minLength: 2, minLowercase: 0 })
  password_hash: string;
  @ApiProperty({
    example: "johnsons street",
    description: "Foydalanuvchi adresi",
  })
  @IsString()
  @IsNotEmpty()
  address: string;
  @ApiProperty({
    example: "admin",
    description: "Foydalanuvchi ishi ",
  })
  @IsString()
  @IsNotEmpty()
  value: string;
  @ApiProperty({
    example: true,
    description: "Foydalanuvchi holati aktivligi",
  })
  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;
  @ApiProperty({
    example: "user1@gmail.com",
    description: "Foydalanuvchi emaili",
  })
  @IsEmail()
  email: string;
}
