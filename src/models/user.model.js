const mongoose = require("mongoose");

//  user Model ======================================================
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String, // type
      required: true, // for validation
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);

// ===================================================================
