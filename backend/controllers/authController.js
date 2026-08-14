const user = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ================= REGISTER =================
const registerUser = async (req, res) => {
  console.log("REGISTER API HIT");
  console.log("REQUEST BODY:", req.body);

  const { username, email, password } = req.body;

  try {
    // Normalize email
    const normalizedEmail = email?.trim().toLowerCase();

    console.log("EMAIL RECEIVED:", email);
    console.log("NORMALIZED EMAIL:", normalizedEmail);

    // Check if user already exists
    const existingUser = await user.findOne({
      email: normalizedEmail,
    });

    console.log("EXISTING USER:", existingUser);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const User = await user.create({
      username,
      email: normalizedEmail,
      password: hashedPassword,
    });

    console.log("USER CREATED:", User._id);

    // Send registration email
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendEmail(
      normalizedEmail,
      "shopNEST Registration OTP",
      `Welcome to shopNEST. Your OTP is ${otp}`
    );

    // Send response
    res.status(201).json({
      _id: User._id,
      username: User.username,
      email: User.email,
      role: User.role,
      token: generateToken(User._id),
    });
  } catch (error) {
    console.error("REGISTER ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LOGIN =================
const loginUser = async (req, res) => {
  console.log("LOGIN API HIT");
  console.log("REQUEST BODY:", req.body);

  const { email, password } = req.body;

  try {
    const normalizedEmail = email?.trim().toLowerCase();

    console.log("LOGIN EMAIL:", normalizedEmail);

    const User = await user.findOne({
      email: normalizedEmail,
    });

    console.log("USER FOUND:", User);

    if (!User) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, User.password);

    console.log("PASSWORD MATCH:", match);

    if (!match) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      _id: User._id,
      username: User.username,
      email: User.email,
      role: User.role,
      token: generateToken(User._id),
    });
  } catch (error) {
    console.error("LOGIN ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET USERS =================
const getUsers = async (req, res) => {
  try {
    const users = await user.find({}).select("-password");

    res.json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};