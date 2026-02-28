const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ ADD THIS
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
require("dotenv").config();

const app = express();

// ================== CONNECT MONGODB ==================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// ================== MIDDLEWARE ==================

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

// ================== ROUTES ==================

productRoutes(app);
authRoutes(app);
cartRoutes(app);

module.exports = app;
