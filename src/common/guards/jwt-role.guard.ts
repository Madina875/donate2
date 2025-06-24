import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../../app.constants";

@Injectable()
export class JwtRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {} //
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    console.log(requiredRoles);
    if (!requiredRoles) {
      return true; //exit
    }
    //role in user
    const permission = req.admin.role.some((role: any) =>
      requiredRoles.includes(role.value)
    );
    if (!permission) {
      throw new ForbiddenException("sizga ruxsat etilmagan");
    }
    return true;
  }
}
