const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const app = express();

// conncting DB usin mongoose
mongoose
  .connect(
    "mongodb+srv://sartaza123_db_user:KKn1zmWVNzId1th5@cluster0.xwsqjv7.mongodb.net/",
  )
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
