export enum userRole {
  CREATOR = "creator",
  USER = "user",
}

export class CreateUserDto {
  full_name: string;
  phone_number: string;
  email: string;
  password_hash: string;
  role: userRole;
  boi: string;
  avatar_url: string;
  banner_url: string;
}
