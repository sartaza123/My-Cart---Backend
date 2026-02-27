const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
require("dotenv").config();

const app = express();

// conncting DB usin mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  }) // while connect
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  }); // while error

productRoutes(app); // using product routes function
authRoutes(app); // using auth routes function
cartRoutes(app); // using cart routes function

module.exports = app;
