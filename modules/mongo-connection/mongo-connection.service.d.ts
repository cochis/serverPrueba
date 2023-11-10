import { ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
export declare class MongoConnectionService {
    private configservice;
    private dbConnection;
    constructor(configservice: ConfigService);
    createConnectionDB(): Promise<void>;
    getConnection(): Connection;
}
