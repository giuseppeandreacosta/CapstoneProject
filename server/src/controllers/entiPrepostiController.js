// controllers/entiPrepostiController.js

import EntiPrepostiUser from '../models/entiprepostiuser.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Function to generate a token (implement securely)
function generateToken(user) {
  const secret = process.env.JWT_SECRET  // Change this to a secure secret
  return jwt.sign({ userId: user._id, username: user.username, role: user.role }, secret, { expiresIn: '1h' });
}

export const entiPrepostiRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await EntiPrepostiUser.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username già in uso.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await EntiPrepostiUser.create({ username, password: hashedPassword });

    const token = generateToken(newUser);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Errore durante la registrazione degli Enti Preposti:', error.message);
    res.status(500).json({ message: 'Errore durante la registrazione degli Enti Preposti', error: error.message });
  }
};

export const entiPrepostiLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await EntiPrepostiUser.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    const token = generateToken(user);

    res.json({ user: { id: user._id, username: user.username, role: user.role }, token });
  } catch (error) {
    console.error('Errore durante il login degli Enti Preposti:', error.message);
    res.status(500).json({ message: 'Errore durante il login degli Enti Preposti', error: error.message });
  }
  console.log(req.body); 
};
