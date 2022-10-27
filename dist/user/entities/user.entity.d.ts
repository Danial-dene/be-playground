import 'dotenv/config';
import { Todo } from 'src/todo/entities/todo.entity';
export declare class User {
    id: string;
    username: string;
    password: string;
    rt: string;
    todo: Todo[];
    hashPass(): Promise<void>;
}
