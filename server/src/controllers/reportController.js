// controllers/reportController.js
import Report from '../models/reports.js';

export const createReport = async (req, res) => {
  try {
    const { name, age, gender, email, location, description } = req.body;
    const newReport = await Report.create({
      name,
      age,
      gender,
      email,
      location,
      description,
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la creazione della segnalazione.' });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Errore durante il recupero delle segnalazioni.' });
  }
};
