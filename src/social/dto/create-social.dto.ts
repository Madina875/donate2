import { IsString } from "class-validator";

export class CreateSocialDto {
  @IsString()
  name: string;
  @IsString()
  social_icon: string;
}
