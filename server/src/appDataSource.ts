import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { __prod__ } from "./constant";
import { Hotel } from "./entities/Hotel.entity";
import { HotelBrand } from "./entities/HotelBrand.entity";
import { User } from "./entities/User.entity";

const portNumber = Number(process.env.DATABASE_PORT);

export const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  port: portNumber,
  ssl: __prod__ ? true : false,
  synchronize: !__prod__,
  entities: [Hotel, HotelBrand, User],
  logging: !__prod__,
  migrations: [path.join(__dirname, "./migrations/*")],
});
