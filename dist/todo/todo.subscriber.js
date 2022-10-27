"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSubscriber = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("./entities/todo.entity");
const log_entity_1 = require("../log/entity/log.entity");
let TodoSubscriber = class TodoSubscriber {
    constructor(dataSource) {
        dataSource.subscribers.push(this);
    }
    listenTo() {
        return todo_entity_1.Todo;
    }
    async beforeUpdate(event) {
        const { manager } = event;
        const todoRepo = manager.getRepository(todo_entity_1.Todo);
        const logRepo = manager.getRepository(log_entity_1.Log);
        const todo = await todoRepo.findOne({
            where: { id: event.entity.id },
            relations: ['user'],
        });
        console.log(typeof todo.user.id, typeof event.entity.user);
        if (todo.user.id !== event.entity.user) {
            event.entity.user = todo.user.id;
            throw new common_1.HttpException('not your todo', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (todo.status == false && event.entity.status == true) {
            const log = logRepo.create({
                userId: todo.user.id,
                todoId: event.entity.id,
            });
            await logRepo.save(log);
        }
    }
};
TodoSubscriber = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TodoSubscriber);
exports.TodoSubscriber = TodoSubscriber;
//# sourceMappingURL=todo.subscriber.js.map