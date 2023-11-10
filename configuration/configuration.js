"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mongo', () => ({
    host: process.env.HOST_MONGODB || 'localhost',
    port: parseInt(process.env.PORT_MONGODB, 10) || 27017,
    user: process.env.USER_MONGODB,
    password: process.env.PASSWORD_MONGODB,
    database: process.env.DATABASE_MONGODB
}));
//# sourceMappingURL=configuration.js.map