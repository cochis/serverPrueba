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
exports.MongoConnectionService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let MongoConnectionService = class MongoConnectionService {
    constructor(configservice) {
        this.configservice = configservice;
        this.createConnectionDB();
    }
    async createConnectionDB() {
        const host = this.configservice.get("mongo.host");
        const port = this.configservice.get("mongo.port");
        const user = this.configservice.get("mongo.user");
        const password = this.configservice.get("mongo.password");
        const database = this.configservice.get("mongo.database");
        const DB_URI = 'mongodb://' + user + ':' + password + '@' + host + ':' + port + '/' + database + '?authSource=admin';
        this.dbConnection = await (0, mongoose_1.createConnection)(DB_URI);
        this.dbConnection.once('open', () => {
            console.log('Connected to ' + database);
        });
        this.dbConnection.once('error', () => {
            console.log('Error connecting to ' + database);
        });
    }
    getConnection() {
        return this.dbConnection;
    }
};
MongoConnectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MongoConnectionService);
exports.MongoConnectionService = MongoConnectionService;
//# sourceMappingURL=mongo-connection.service.js.map