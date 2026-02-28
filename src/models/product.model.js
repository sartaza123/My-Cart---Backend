const mongoose = require("mongoose");
// ============================================================
// Products Model
// ============================================================

// ================== Product Schema ==========================
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String, // type
      required: true, // for validation
      trim: true, // trim method
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    productImageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);
// ============================================================

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;

// ============================================================
