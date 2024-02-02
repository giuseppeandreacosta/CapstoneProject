import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente dal file .env
dotenv.config();

const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET; // Utilizza la chiave segreta da .env
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
};

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username già in uso.' });
    }

    const newUser = await User.create({ username, password });

    const token = generateToken(newUser._id);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la registrazione.' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    const token = generateToken(user._id);

    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante il login.' });
  }
};
