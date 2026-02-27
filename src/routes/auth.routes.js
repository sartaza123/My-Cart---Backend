// authentication routing ====================

const { createUser } = require("../controllers/auth.controller");

function authRoutes(app) {
  app.post("/api/register", createUser);
  //   app.post("/loginr", authController);
}

module.exports = authRoutes;
