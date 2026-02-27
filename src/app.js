const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    "mongodb+srv://sartaza123_db_user:KKn1zmWVNzId1th5@cluster0.xwsqjv7.mongodb.net/",
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = app;
