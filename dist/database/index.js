"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const config = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    entities: ['./dist/models/*.js'],
    migrations: ['./dist/database/migrations/*.js'],
    cli: {
        migrationsDir: './src/database/migrations',
    },
};
(0, typeorm_1.createConnection)(config);
