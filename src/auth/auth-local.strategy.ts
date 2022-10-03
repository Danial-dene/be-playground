import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, userPassword: string) {
    const user = await this.authService.validateUser(username, userPassword);
    if (!user) {
      throw new HttpException(
        'password or email do not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }
}
