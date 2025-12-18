import Doctor from "../models/Doctor.model.js";

/* --------------------------
   CREATE DOCTOR 
------------------------- */
export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create doctor" });
  }
};

/* --------------------------
   GET ALL DOCTORS
-------------------------- */
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
};

/* -------------------------
   GET DOCTOR BY ID
------------------------- */
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ message: "Invalid doctor ID" });
  }
};

/* ------------------------
   UPDATE DOCTOR (Admin)
--------------------------- */
export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({
      message: "Doctor updated successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update doctor"+error });
  }
};

/*-----------------------
   DELETE DOCTOR (Admin)
------------------------- */
export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete doctor" });
  }
};
