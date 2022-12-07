import { DataSource } from "typeorm";
import "dotenv-safe/config";

import path from "path";
import { __prod__ } from "./constant";
import { Hotel } from "./entities/Hotel";
import { HotelBrand } from "./entities/HotelBrand";
import { User } from "./entities/User";

const portNumber = Number(process.env.DATABASE_PORT);

export const dataSource = new DataSource({
  type: "mongodb",
  host: process.env.MONGO_URI,
  url: process.env.MONGO_URI,
  port: portNumber,
  useNewUrlParser: !__prod__,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [Hotel, User, HotelBrand],
});
