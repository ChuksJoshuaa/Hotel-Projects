import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { __prod__ } from "./constant";

const portNumber = Number(process.env.DATABASE_PORT);

export const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  port: portNumber,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: !__prod__,
  entities: ["dist/src/entities/**/**.entity{.ts,.js}"],
  logging: !__prod__,
  migrations: [path.join(__dirname, "./migrations/*")],
});

// "dist/src/**/**.entity{.ts,.js}",
