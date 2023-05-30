import { DataSource } from "typeorm";
import { Book } from "../entities/Book.js";
import { MONGODB_URI } from "../utils/config.js";
import * as process from "process";

const AppDataSource = new DataSource({
    url:MONGODB_URI,
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: process.env.MONGO_DATABASE,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [Book],
    useUnifiedTopology: true,
});

AppDataSource.initialize();

export { AppDataSource };
