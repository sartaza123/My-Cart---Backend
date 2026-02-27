const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  description: String,
  stock: Number,
  productImageUrl: String,
  category: String,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
