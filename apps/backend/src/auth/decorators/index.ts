import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';

// Define the roles
export const ROLES_KEY = 'roles';
export type Role = 'Admin' | 'Support';

// Create a decorator that takes a list of roles as an argument
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

// Create a custom decorator to extract the roles from the request
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);