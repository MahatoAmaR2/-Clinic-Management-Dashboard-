import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/auth.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import patientRoutes from "./routes/patient.routes.js";

app.use("/api/auth", userRouter);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);

export { app };
