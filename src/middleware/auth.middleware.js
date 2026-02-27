const userModel = require("../models/user.model");

function verifyToken() {
  // checking jwt token
  if (
    req.header &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1], //varifying token
      process.env.JWT_SECRET, // secret key from .env
      function (err, verifiedToken) {
        if (err) {
          return res.status(403).send({ message: "Invalid Token" });
        }
        // generting userDate to store User for accessing next --->
        userModel.findById(varifiedToken.id).then((userData) => {
          req.user = userData;
          next();
        });
      },
    );
  }
}

module.exports = verifyToken;
