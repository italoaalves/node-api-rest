import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import productsRoutes from "./routes/products.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/products", productsRoutes);

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      mesage: error.mesage,
    },
  });
});

export default app;
