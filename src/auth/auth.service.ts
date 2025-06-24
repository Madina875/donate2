import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/models/admin.model";
import { SignInAdminDto } from "../admin/dto/signin-admin.dto";
import { UserService } from "../user/user.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { User } from "../user/models/user.model";
import { SignInUserDto } from "../user/dto/signin-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.getAdminBYEmail(
      createAdminDto.email
    );
    if (condidate) {
      throw new ConflictException("Bunday foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password_hash, 10);
    createAdminDto.password_hash = hashedPassword;

    const newAdmin = await this.adminService.createAdmin(createAdminDto);
    return newAdmin;
  }

  private async generateToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_active: admin.is_active,
      role: admin.role,
    };

    let token: any;
    try {
      token = {
        token: this.jwtService.sign(payload, {
          secret: "SecretKeyKey",
          expiresIn: "15h",
        }),
      };
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(signInAdminDto: SignInAdminDto) {
    const admin = await this.adminService.getAdminBYEmail(signInAdminDto.email);
    if (!admin) {
      throw new UnauthorizedException("email  or password incorrect ❌");
    }

    const validPassword = await bcrypt.compare(
      signInAdminDto.password_hash,
      admin.password_hash
    );

    if (!validPassword) {
      throw new UnauthorizedException("email/parol notogri");
    }

    const token = await this.generateToken(admin);

    return { message: "user signed in ", id: admin.id, token };
  }

  async signUpUser(createUserDto: CreateUserDto) {
    const condidate = await this.userService.getUserBYEmail(
      createUserDto.email
    );
    if (condidate) {
      throw new ConflictException("Bunday foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password_hash, 10);
    createUserDto.password_hash = hashedPassword;

    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  private async generateTokenUser(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    let token: any;
    try {
      token = {
        token: this.jwtService.sign(payload, {
          secret: "SecretKeyUser",
          expiresIn: "15h",
        }),
      };
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async signInUser(signInUserDto: SignInUserDto) {
    const user = await this.userService.getUserBYEmail(signInUserDto.email);
    if (!user) {
      throw new UnauthorizedException("email  or password incorrect ❌");
    }

    const validPassword = await bcrypt.compare(
      signInUserDto.password_hash,
      user.password_hash
    );

    if (!validPassword) {
      throw new UnauthorizedException("email/parol notogri");
    }

    const token = await this.generateTokenUser(user);

    return { message: "user signed in ", id: user.id, token };
  }
}
