import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Body() dto: LoginDto, @Request() req: any) {
    return this.authService.login(req.user);
  }
}
