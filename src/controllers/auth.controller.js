const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

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

module.exports = { createUser };
