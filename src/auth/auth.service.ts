import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  login(user: User) {
    const accessToken = this.jwtService.sign(
      { sub: user.id, username: user.username },
      {
        secret: process.env.AT_SECRET,
        expiresIn: 60 * 15,
      },
    );
    const refreshToken = this.jwtService.sign(
      { sub: user.id, username: user.username },
      {
        secret: process.env.RT_SECRET,
        expiresIn: 60 * 60 * 24 * 7,
      },
    );
    this.userService.saveRt(refreshToken, user.id);
    return { at: accessToken, rt: refreshToken };
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findOne(username);
    if (!user) throw new UnauthorizedException('Username do not exist');
    if (bcrypt.compare(password, user.password)) {
      return user;
    }
  }
}
