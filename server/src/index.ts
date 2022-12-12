import "reflect-metadata";
import { __prod__, COOKIE_NAME } from "./constant";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";
const RedisStore = connectRedis(session);
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { HotelBrandResolver } from "./resolvers/brand";
import { HotelResolver } from "./resolvers/hotel";
import path from "path";
import { DataSource } from "typeorm";

const main = async () => {
  const portNumber = Number(process.env.DATABASE_PORT);

  const dataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    port: portNumber,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: !__prod__,
    logging: !__prod__,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [__dirname + "/entity/*.{js,ts}"],
  });

  dataSource
    .initialize()
    .then((response) => {
      console.log(typeof response);
    })
    .catch((error) => console.log(error));

  // dataSource.runMigrations();

  const PORT = process.env.PORT || 5000;
  const secret_key = process.env.SESSION_SECRET;

  const app = express();

  app.use(cookieParser());

  const redis = new Redis(process.env.REDIS_URL as any);

  // const redis = new Redis();
  app.set("trust proxy", 1);
  app.use(
    cors({
      // origin: process.env.CORS_ORIGIN,
      origin: process.env.CORS_ORIGIN1,
      credentials: true,
    })
  );

  app.use(
    session({
      secret: secret_key || "",
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: __prod__, //set it to false for development
        sameSite: "lax",
        secure: __prod__, //must be false for development and true for production
        // domain: !__prod__ ? ".netlify.app" : undefined
      },
      saveUninitialized: false,
      resave: false,
    })
  );

  app.get("/", (_, res) => {
    res.send("hello");
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, HotelBrandResolver, HotelResolver],
      validate: false,
    }),

    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          "request.credentials": "include",
        },
      }),
    ],
    introspection: __prod__,
    context: ({ req, res }) => ({ req, res, redis }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}....`);
  });
};

main().catch((err) => {
  console.log(err);
});
