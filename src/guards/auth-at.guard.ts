import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import * as JWT from 'jsonwebtoken';

export class AtGuard extends AuthGuard('at-jwt') {
  getRequest(context: ExecutionContext): unknown {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const jwt = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    const decodedJwt = JWT.decode(jwt);
    req['user'] = decodedJwt;
    return ctx.getContext().req;
  }
}
