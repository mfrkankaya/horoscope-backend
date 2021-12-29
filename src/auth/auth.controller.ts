import { Body, Controller, Post } from '@nestjs/common';
import { UserCredentials } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: UserCredentials) {
    return this.authService.login(body);
  }
}
