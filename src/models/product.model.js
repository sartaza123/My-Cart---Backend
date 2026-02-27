const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  price: String,
  description: String,
  stock: String,
  productImageUrl: String,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
