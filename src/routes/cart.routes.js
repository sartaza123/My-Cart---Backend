const {
  addToCart,
  updateCart,
  removeFromCart,
  getCartItems,
} = require("../controllers/cart.controller");

// JWT token middleware ========================================
const verifyToken = require("../middleware/auth.middleware");

// =============================================================
// cart routes CRUD opeations
// =============================================================

function cartRoutes(app) {
  // ================ POST ->  /api/cart =======================
  app.post("/api/cart", verifyToken, addToCart);

  // ================ GET -> /api/cart/ ========================
  app.get("/api/cart", verifyToken, getCartItems);

  //================= PUT -> /api/cart/:id =====================
  app.put("/api/cart/:id", verifyToken, updateCart);

  // ================ DELETE -> /api/cart/:id ==================
  app.delete("/api/cart/:id", verifyToken, removeFromCart);
}
// =============================================================
module.exports = cartRoutes;
