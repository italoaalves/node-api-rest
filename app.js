import express from "express";
import morgan from "morgan";

import productsRoute from "./routes/products.js";
import ordersRoute from "./routes/orders.js";

const app = express();

app.use(morgan("dev"));

app.use("/products", productsRoute);
app.use("/orders", ordersRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");

  error.status(404);

  next(erro);
});

export default app;
