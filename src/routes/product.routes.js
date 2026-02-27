const {
  fetchAllProduct,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// product routing ====================
function productRoutes(app) {
  // GET all products
  app.get("/api/products", fetchAllProduct);

  // GET single product
  app.get("/api/products/:id", fetchProduct);

  // CREATE product
  app.post("/api/products", createProduct);

  // UPDATE product
  app.put("/api/products/:id", updateProduct);

  // DELETE product
  app.delete("/api/products/:id", deleteProduct);
}

module.exports = productRoutes;
