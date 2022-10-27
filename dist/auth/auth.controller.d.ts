import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto, req: any): {
        at: string;
        rt: string;
    };
    test(dto: LoginDto, req: any): {
        at: string;
        rt: string;
    };
}
