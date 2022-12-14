import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, userPassword: string): Promise<{
        id: string;
        username: string;
        rt: string;
        todo: import("../todo/entities/todo.entity").Todo[];
    }>;
}
export {};
