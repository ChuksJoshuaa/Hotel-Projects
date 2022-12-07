import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";
import { AuthenticationError } from "apollo-server";

export const Authenticated: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userEmail) {
    throw new AuthenticationError("You must be logged in");
  }

  return next();
};
