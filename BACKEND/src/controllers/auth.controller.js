import jwt from "jsonwebtoken"
import User from "../models/User.model.js"

//    Generate JWT Token

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ------------------------- SIGNUP -------------------------

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "staff", 
    });

    const token = generateToken(user);

    const { password: _, ...userData } = user.toObject();

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: userData,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


