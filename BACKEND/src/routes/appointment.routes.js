import express from "express";
import {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  verifyJWT,
  authorizeRoles("admin", "staff"),
  createAppointment
);

router.get(
  "/",
  verifyJWT,
  authorizeRoles("admin", "staff", "doctor"),
  getAllAppointments
);

router.put(
  "/:id/status",
  verifyJWT,
  authorizeRoles("admin", "doctor"),
  updateAppointmentStatus
);

router.delete(
  "/:id",
  verifyJWT,
  authorizeRoles("admin", "staff"),
  deleteAppointment
);

export default router;
