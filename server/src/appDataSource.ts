import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { __prod__ } from "./constant";
import { Hotel } from "./entities/Hotel";
import { HotelBrand } from "./entities/HotelBrand";
import { User } from "./entities/User";

const portNumber = Number(process.env.DATABASE_PORT);

export const dataSource = new DataSource({
  type: "postgres",
  // host: "localhost",
  url: process.env.DATABASE_URL,
  port: portNumber,
  // username: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
  // synchronize: true,
  logging: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [Hotel, User, HotelBrand],
});
