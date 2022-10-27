import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
  
//will be display in swagger
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  @Post('login')
  login(@Body() dto: LoginDto, @Request() req: any) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'Hello' })
  @Post('test')
  test(@Body() dto: LoginDto, @Request() req: any) {
    return this.authService.login(req.user);
  }


}
