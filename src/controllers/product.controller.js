const productModel = require("../models/product.model");

// fetch all product from database
async function fetchAllProduct(req, res) {
  try {
    const allProducts = await productModel.find();

    // send access response
    res
      .status(200)
      .json({ message: "Products fetched successfully", allProducts });
  } catch (err) {
    // handle error
    res.status(500).json({
      message: "something went Wrong",
      err: err.message,
    });
  }
}

async function fetchProduct(req, res) {
  const product = await productModel.findById(req.params.id);

  try {
    res.status(200).json({ message: "Products fetched successfully", product });
  } catch (err) {
    // handle error
    res.status(500).json({
      message: "something went Wrong",
      err: err.message,
    });
  }
}

module.exports = { fetchAllProduct, fetchProduct };
