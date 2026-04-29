const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "This Email is Already loged in"],
  },
  password: String,
});

const userModel = mongoose.model("login", userSchema);

module.exports = userModel;
