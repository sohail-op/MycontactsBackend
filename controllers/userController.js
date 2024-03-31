const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@des Register a user
//@route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  const userFound = await User.findOne({ email });
  if (userFound) {
    res.status(400);
    throw new Error("Email already in use");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  //   console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User created");
  if (user) {
    res
      .status(201)
      .json({ name: user.username, id: user._id, email: user.email });
  } else {
    throw new Error("User data is not valid");
  }
  res.json("User registered successfully!");
});

//@des Login a user
//@route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "5 min" }
    );
    res.status(200).json(accessToken);
  } else {
    res.status(401);
    throw new Error("Invalid Credential");
  }
});

//@des Get all contacts
//@route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
