import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './auth-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AtJwtStrategy } from './auth-at.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  providers: [AuthService, LocalStrategy, AtJwtStrategy],
  exports: [LocalStrategy, AtJwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
