import "dotenv/config";

import fs from "fs";
import path from "path";

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import jwt from "jsonwebtoken";

import routes from "./routes";

const app = express();

// Middlewares
app.use(helmet());
app.use(morgan());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.use("/user", routes.user);
app.use("/login", routes.login);
app.use("/register", routes.register);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(4002, () => {
  console.log(`Example app listening on port 4002!`);
});
