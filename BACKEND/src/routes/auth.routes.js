import express from "express";
import {
  signup,
  login,
  logout,
  updatePassword,
  updateRole,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {authorizeRoles} from "../middlewares/role.middleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
router.put("/update-password", verifyJWT, updatePassword);
router.put("/:id/role", verifyJWT, authorizeRoles("admin"), updateRole);

export default router;
