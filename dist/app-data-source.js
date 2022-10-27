"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo-graphql',
    entities: [
        'C:/Users/siraz/OneDrive - Universiti Teknologi MARA/Documents/Code/todo-graphql/src/todo/entities/todo.entity.ts',
    ],
    synchronize: true,
});
exports.AppDataSource.initialize();
//# sourceMappingURL=app-data-source.js.map