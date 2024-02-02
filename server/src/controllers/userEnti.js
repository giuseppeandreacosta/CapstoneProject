import express from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';  // Aggiunto import per dotenv


dotenv.config();

const router = express.Router();

// Funzione per generare un token (da implementare in modo sicuro)
function generateToken(user) {
  // In un'applicazione del mondo reale, dovresti utilizzare un pacchetto come jsonwebtoken per generare token JWT in modo sicuro
  const secret = process.env.JWT_SECRET || 'chiave_segreta_predefinita';
  return jwt.sign({ userId: user._id, username: user.username, role: user.role }, secret, { expiresIn: '1h' });
}

// Funzione per gestire la creazione degli enti preposti
const createEntiPreposti = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Controlla se l'utente esiste già
    const existingUser = await UserEnti.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'L\'utente esiste già' });
    }

    // Se l'utente non esiste, crea un nuovo utente enti preposti
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserEnti({ username, password: hashedPassword, role: 'enti_preposti' });

    // Salva il nuovo utente nel database
    await newUser.save();

    // Simula la generazione di un token JWT
    const token = generateToken(newUser);

    // Invia la risposta con le informazioni dell'utente e il token
    res.json({ user: { id: newUser._id, username: newUser.username, role: newUser.role }, token });
  } catch (error) {
    console.error('Errore durante la creazione degli enti preposti:', error.message);
    res.status(500).json({ message: 'Errore durante la creazione degli enti preposti' });
  }
};

// Funzione per generare un token (da implementare in modo sicuro)


export default router;
