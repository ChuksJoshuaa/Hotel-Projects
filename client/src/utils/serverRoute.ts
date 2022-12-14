export const LIVE_BASE_URL =
  "https://hotel-projects-1t6y-f8yn1d3k4-chuksjoshuaa-gmailcom.vercel.app/graphql";

export const DEV_BASE_URL = "http://localhost:5000/graphql";

export const serverRoute = (env: string): any => {
  if (env === "production") {
    return LIVE_BASE_URL;
  } else if (env === "development") {
    return DEV_BASE_URL;
  }
};
