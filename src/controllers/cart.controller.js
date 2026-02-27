const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");

// Add product to cart
async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;

    // Check if product exists
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if item already in cart
    const existingItem = await cartModel.findOne({
      user: req.user._id,
      product: productId,
    });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();

      return res
        .status(200)
        .json({ message: "Cart updated", data: existingItem });
    }

    // Create new cart item
    const newCartItem = await cartModel.create({
      user: req.user._id,
      product: productId,
      quantity: quantity || 1,
    });

    res.status(201).json({
      message: "Product added to cart",
      data: newCartItem,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}

// Update cart item quantity
async function updateCart(req, res) {
  try {
    const { quantity } = req.body;

    const cartItem = await cartModel.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({
      message: "Cart item updated",
      data: cartItem,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}

// Remove item from cart
async function removeFromCart(req, res) {
  try {
    const cartItem = await cartModel.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    await cartItem.deleteOne();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}

module.exports = { addToCart, updateCart, removeFromCart };
