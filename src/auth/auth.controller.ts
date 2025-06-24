import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInAdminDto } from "../admin/dto/signin-admin.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { SignInUserDto } from "../user/dto/signin-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() signInAdminDto: SignInAdminDto) {
    return this.authService.signIn(signInAdminDto);
  }

  @Post("signupu")
  signUpUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUpUser(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signinu")
  signinUser(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signInUser(signInUserDto);
  }
}
