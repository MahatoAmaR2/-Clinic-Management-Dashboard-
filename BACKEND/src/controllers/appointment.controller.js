import Appointment from "../models/Appointment.model.js";

/* ------------------------
   CREATE APPOINTMENT
------------------------- */
export const createAppointment = async (req, res) => {
  try {
    const { patient, doctor, date, time, notes } = req.body;

    if (!patient || !doctor || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ❗ Prevent double booking
    const existingAppointment = await Appointment.findOne({
      doctor,
      date,
      time,
      status: "scheduled",
    });

    if (existingAppointment) {
      return res.status(409).json({
        message: "Doctor already has an appointment at this time",
      });
    }

    const appointment = await Appointment.create({
      patient,
      doctor,
      date,
      time,
      notes,
    });

    res.status(201).json({
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create appointment" });
  }
};

/* ------------------------
   GET ALL APPOINTMENTS
---------------------------- */
export const getAllAppointments = async (req, res) => {
  try {
    let query = {};

    // Doctor sees only own appointments
    if (req.user.role === "doctor") {
      query.doctor = req.user._id;
    }

    const appointments = await Appointment.find(query)
      .populate("patient", "name phone")
      .populate("doctor", "name specialty");

    res.status(200).json({
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
};

/*----------------------------
   UPDATE APPOINTMENT STATUS
----------------------------- */
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["scheduled", "completed", "cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Doctor can update only own appointment
    if (
      req.user.role === "doctor" &&
      appointment.doctor.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    appointment.status = status;
    await appointment.save();

    res.status(200).json({
      message: "Appointment status updated",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update appointment" });
  }
};

/* -------------------------
   DELETE / CANCEL APPOINTMENT
-------------------------*/
export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete appointment" });
  }
};
