const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Username is required"] },
    password: { type: String, required: [true, "Password is required"] },
    email: {
      type: String,
      unique: [true, "Enter unique Email"],
      required: [true, "Email is required"],
      match: [/\S+@\S+\.\S+/, "Please enter a valid e-mail address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
