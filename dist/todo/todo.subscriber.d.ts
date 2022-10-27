import { EntitySubscriberInterface, DataSource, UpdateEvent } from 'typeorm';
import { Todo } from './entities/todo.entity';
export declare class TodoSubscriber implements EntitySubscriberInterface<Todo> {
    constructor(dataSource: DataSource);
    listenTo(): string | Function;
    beforeUpdate(event: UpdateEvent<Todo>): Promise<void>;
}
