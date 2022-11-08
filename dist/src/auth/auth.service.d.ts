import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): {
        at: string;
        rt: string;
    };
    validateUser(username: string, password: string): Promise<User>;
}
