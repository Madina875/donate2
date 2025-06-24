import { ApiProperty } from "@nestjs/swagger";

export class SignInAdminDto {
  @ApiProperty({
    example: "user1@gmail.com",
    description: "Foydalanuvchi emaili",
  })
  readonly email: string;
  @ApiProperty({
    example: "12345OIUYT",
    description: "Foydalanuvchi PAROLI",
  })
  readonly password_hash: string;
}
