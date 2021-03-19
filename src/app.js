const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const usersRoutes = require("./routes/products.js");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", usersRoutes);

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
