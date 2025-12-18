import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

/* Admin & Staff */
router.post("/", verifyJWT, authorizeRoles("admin", "staff"), createPatient);
router.put("/:id", verifyJWT, authorizeRoles("admin", "staff"), updatePatient);

/* Admin, Staff, Doctor */
router.get("/", verifyJWT, authorizeRoles("admin", "staff", "doctor"), getAllPatients);
router.get("/:id", verifyJWT, authorizeRoles("admin", "staff", "doctor"), getPatientById);

/* Admin only */
router.delete("/:id", verifyJWT, authorizeRoles("admin"), deletePatient);

export default router;
