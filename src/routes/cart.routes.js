const {
  addToCart,
  updateCart,
  removeFromCart,
} = require("../controllers/cart.controller");

const verifyToken = require("../middleware/auth.middleware");

// cart routing ====================
function cartRoutes(app) {
  // POST   /api/cart
  app.post("/api/cart", verifyToken, addToCart);

  // PUT    /api/cart/:id
  app.put("/api/cart/:id", verifyToken, updateCart);

  // DELETE /api/cart/:id
  app.delete("/api/cart/:id", verifyToken, removeFromCart);
}

module.exports = cartRoutes;
