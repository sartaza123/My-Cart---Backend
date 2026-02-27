const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function verifyToken(req, res, next) {
  try {
    // Check if authorization header exists
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res.status(401).json({ message: "Token not provided" });
    }

    // Extract token
    const token = req.headers.authorization.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = verifyToken;
