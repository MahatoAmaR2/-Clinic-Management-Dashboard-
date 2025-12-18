import Patient from "../models/Patient.model.js";

/* -------------------------
   CREATE PATIENT
------------------------- */
export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      message: "Patient created successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create patient" });
  }
};

/* -------------------------
   GET ALL PATIENTS
---------------------------- */
export const getAllPatients = async (req, res) => {
  try {
    let query = {};

    // Doctor sees only assigned patients
    if (req.user.role === "doctor") {
      query.assignedDoctor = req.user._id;
    }

    const patients = await Patient.find(query).populate(
      "assignedDoctor",
      "name specialty"
    );

    res.status(200).json({
      count: patients.length,
      patients,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch patients" });
  }
};

/*-------------------------
   GET PATIENT BY ID
-------------------------*/
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate(
      "assignedDoctor",
      "name specialty"
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: "Invalid patient ID" });
  }
};

/*-------------------------
   UPDATE PATIENT
--------------------------- */
export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Patient updated successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update patient" });
  }
};

/*-------------------------
   DELETE PATIENT
-------------------------- */
export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete patient" });
  }
};
