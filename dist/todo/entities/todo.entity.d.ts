import { User } from 'src/user/entities/user.entity';
export declare class Todo {
    id: number;
    todo: string;
    status: boolean;
    dateSubmitted: Date;
    user: User;
}
