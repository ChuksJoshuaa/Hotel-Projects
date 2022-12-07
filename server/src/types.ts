import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { ObjectID } from "typeorm";

export type MyContext = {
  req: Request & {
    session: Session &
      Partial<SessionData> & { userId: ObjectID } & { userEmail: string };
  };
  redis: Redis;
  res: Response;
};
