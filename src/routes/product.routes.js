const {
  fetchAllProduct,
  fetchProduct,
} = require("../controllers/product.controller");

// product routing ====================
function productRoutes(app) {
  app.get("/api/products", fetchAllProduct); // fetch all products
  app.get("/api/product/:id", fetchProduct); // fetch product with their id
}

module.exports = productRoutes;
