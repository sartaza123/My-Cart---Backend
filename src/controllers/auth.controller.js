const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ==================================================================
//  Register user contrller function
// ==================================================================
async function createUser(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const data = await userModel.findOne({ email });

    if (data) {
      return res.status(409).send({ message: "User Already exist" });
    } else {
      const newUser = await userModel.create({
        fullName,
        email,
        password: await bcrypt.hash(password, 10),
      });
      return res.status(201).json(newUser);
    }
  } catch (err) {
    // handle error
    res.status(500).json({
      message: "something went Wrong",
      err: err.message,
    });
  }
}

// ==================================================================
// login controller function
// ==================================================================

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const data = await userModel.findOne({ email });

    if (!data) {
      return res
        .status(401)
        .send({ message: "User not found with entered email" });
    } else {
      let validPassword = bcrypt.compareSync(password, data.password);
      if (!validPassword) {
        return res.status(403).send({ message: "Password is incorrect" });
      }

      //  ====================================
      //  JWT Token
      // =====================================
      var token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).send({
        user: {
          email: data.email,
          fullName: data.fullName,
        },
        accessToken: token,
      });
    }
  } catch (err) {
    // ========== handle error ===========
    res.status(500).json({
      message: "something went Wrong",
      err: err.message,
    });
  }
}

module.exports = { createUser, loginUser };
