const productModel = require("../models/product.model");

// =======================================================================
// CRUD operations on product
// =======================================================================

// fetch all product from database =======================================
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
// =======================================================================

// fetch product =========================================================
async function fetchProduct(req, res) {
  const product = await productModel.findById(req.params.id);

  try {
    res.status(200).json({ message: "Product fetched successfully", product });
  } catch (err) {
    // handle error
    res.status(500).json({
      message: "something went Wrong",
      err: err.message,
    });
  }
}
// =======================================================================

// CREATE product ========================================================
async function createProduct(req, res) {
  try {
    const newProduct = await productModel.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err: err.message,
    });
  }
}

// =======================================================================

// UPDATE product ========================================================
async function updateProduct(req, res) {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err: err.message,
    });
  }
}
// =======================================================================

// DELETE product ========================================================
async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err: err.message,
    });
  }
}
// =======================================================================

module.exports = {
  fetchAllProduct,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
