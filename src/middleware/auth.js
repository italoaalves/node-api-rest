import "dotenv/config";
import expressJwt from "express-jwt";

const auth = () => {
  return expressJwt({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/login",
      "/register",
    ],
  });
};

export default auth;
