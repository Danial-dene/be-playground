import { ExecutionContext, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AtJwtStrategy extends PassportStrategy(Strategy, 'at-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.AtSecret,
      ignoreExpiration: false,
      signOptions: { expiresIn: '60s' },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate(payload: any, context: ExecutionContext): Promise<any> {
    return payload;
  }
}
