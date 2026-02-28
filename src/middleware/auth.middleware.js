const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// =======================================================================
// JWT Authentication Middleware
// =======================================================================

async function verifyToken(req, res, next) {
  try {
    // check if Authorization header exists ===============================
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res.status(401).json({ message: "Token not provided" });
    }

    // extract token from header =========================================
    const token = req.headers.authorization.split(" ")[1];

    // verify token using secret key =====================================
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user using decoded id ========================================
    const user = await userModel.findById(decoded.id).select("-password");

    // if user not found =================================================
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // attach user data to request object

    next(); // move to next middleware / controller
  } catch (error) {
    // if token invalid or expired =======================================
    return res.status(401).json({ message: "Invalid Token" });
  }
}

// =======================================================================

module.exports = verifyToken;
