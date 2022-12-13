"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const constant_1 = require("./constant");
const Hotel_entity_1 = require("./entities/Hotel.entity");
const HotelBrand_entity_1 = require("./entities/HotelBrand.entity");
const User_entity_1 = require("./entities/User.entity");
const portNumber = Number(process.env.DATABASE_PORT);
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    port: portNumber,
    synchronize: !constant_1.__prod__,
    entities: [Hotel_entity_1.Hotel, HotelBrand_entity_1.HotelBrand, User_entity_1.User],
    logging: !constant_1.__prod__,
    migrations: [path_1.default.join(__dirname, "./migrations/*")],
});
//# sourceMappingURL=appDataSource.js.map