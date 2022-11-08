import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findOne(username: string): Promise<User>;
    saveRt(rt: string, id: string): Promise<void>;
}
