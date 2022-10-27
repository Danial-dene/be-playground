import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todoRepo;
    constructor(todoRepo: Repository<Todo>);
}
