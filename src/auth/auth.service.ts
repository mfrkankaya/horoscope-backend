import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserCredentials } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login({ username, password }: UserCredentials) {
    if (
      username !== process.env.ADMIN_USER ||
      password !== process.env.ADMIN_PASS
    )
      throw new UnauthorizedException('Invalid credentials.');

    const token = this.jwtService.sign({ type: 'admin' });

    return token;
  }
}
