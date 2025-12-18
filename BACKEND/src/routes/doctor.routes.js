import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", verifyJWT, getAllDoctors);
router.get("/:id", verifyJWT, getDoctorById);

/* Admin-only routes */
router.post("/", verifyJWT, authorizeRoles("admin"), createDoctor);
router.put("/:id", verifyJWT, authorizeRoles("admin"), updateDoctor);
router.delete("/:id", verifyJWT, authorizeRoles("admin"), deleteDoctor);

export default router;
