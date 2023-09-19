import { IsEnum, MinLength } from "class-validator";

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEnum(['admin', 'customer'], { message: 'use correct role' })
  role: 'admin' | 'customer'
}