import express from "express";
import {
  signup,
  login,
  logout,
  updatePassword,
} from "../controllers/auth.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"
const router = express.Router()

router.post("/signup", signup);
router.post("/login", login);



// Logout (JWT cookie cleared)
router.post("/logout", verifyJWT, logout);

// Update password
router.put("/update-password", verifyJWT, updatePassword);

export default router;
