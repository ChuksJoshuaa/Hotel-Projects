"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constant_1 = require("./constant");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./resolvers/user");
const ioredis_1 = __importDefault(require("ioredis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const apollo_server_core_1 = require("apollo-server-core");
const appDataSource_1 = require("./appDataSource");
const brand_1 = require("./resolvers/brand");
const hotel_1 = require("./resolvers/hotel");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield appDataSource_1.dataSource
        .initialize()
        .then((response) => {
        console.log(typeof response);
    })
        .catch((error) => console.log(error));
    const PORT = process.env.PORT || 5000;
    const secret_key = process.env.SESSION_SECRET;
    const app = (0, express_1.default)();
    app.use((0, cookie_parser_1.default)());
    const redis = new ioredis_1.default(process.env.REDIS_URL);
    app.set("trust proxy", 1);
    app.use((0, cors_1.default)({
        origin: constant_1.__prod__
            ? process.env.CORS_ORIGIN1
            : process.env.CORS_ORIGIN,
        credentials: true,
    }));
    app.use((0, express_session_1.default)({
        secret: secret_key || "",
        name: constant_1.COOKIE_NAME,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: constant_1.__prod__,
            sameSite: "lax",
            secure: constant_1.__prod__,
        },
        saveUninitialized: false,
        resave: false,
    }));
    app.get("/", (_, res) => {
        res.send("hello");
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver, brand_1.HotelBrandResolver, hotel_1.HotelResolver],
            validate: false,
        }),
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)({
                settings: {
                    "request.credentials": "include",
                },
            }),
        ],
        introspection: constant_1.__prod__,
        context: ({ req, res }) => ({ req, res, redis }),
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.listen(PORT, () => {
        console.log(`server listening on port: ${PORT}....`);
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map