"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    type: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    entities: ["src/**/*.entity.ts"],
    migrations: ["database/migrations/**/*.*"],
    seeds: ["database/seeds/**/*{.ts,.js}"],
    factories: ["database/factories/**/*{.ts,.js}"],
    cli: {
        migrationsDir: "database/migrations",
    },
};
//# sourceMappingURL=ormconfig.js.map