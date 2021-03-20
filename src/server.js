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

app.post("/login", (req, res, next) => {
  //esse teste abaixo deve ser feito no seu banco de dados
  if (req.body.user === "luiz" && req.body.password === "123") {
    //auth ok
    const id = 1; //esse id viria do banco de dados
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300, // expires in 5min
    });
    return res.json({ auth: true, token: token });
  }

  res.status(500).json({ message: "Login inválido!" });
});

app.use("/user", routes.user);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(4002, () => {
  console.log(`Example app listening on port 4002!`);
});
