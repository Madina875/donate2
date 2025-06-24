import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req);
    // console.log(req.headers);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({ message: "AuthHeader not found 👾❌" });
    }
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (bearer != "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "BearerToken not found 👾❌",
      });
    }
    //logika
    let decodedPayload: object;
    try {
      decodedPayload = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException({
        message: "foydalanuvchi autorizatsiyadan o'tmagan",
        error: error,
      });
    }
    req.admin = decodedPayload;
    return true;
  }
}
