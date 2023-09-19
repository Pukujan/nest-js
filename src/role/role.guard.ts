// role.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authorizationToken = request.headers.authorization;

    // Check if the authorization token matches the expected value
    return authorizationToken === 'Iamadmin';
  }
}
