// authentication routing ===================================================

const { createUser, loginUser } = require("../controllers/auth.controller");

function authRoutes(app) {
  app.post("/api/register", createUser);
  app.post("/api/login", loginUser);
}

module.exports = authRoutes;

// ===========================================================================
