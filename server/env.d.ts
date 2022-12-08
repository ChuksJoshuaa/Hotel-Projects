declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    REDIS_URL: string;
    SESSION_SECRET: string | string[];
    CORS_ORIGIN: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_PORT: string | number;
    NODE_ENV: string;
    DATABASE_NAME: string;
  }
}
