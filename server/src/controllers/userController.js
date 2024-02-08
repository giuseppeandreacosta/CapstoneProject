import User from '../models/users.js';
import jwt from 'jsonwebtoken';

// Funzione di verifica del token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Ottieni la lista degli utenti
export const getUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.json({ users: userList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la richiesta degli utenti.' });
  }
};

// Ottieni dettagli utente con autenticazione JWT
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  console.log('UserID from URL:', userId);

  try {
    const user = await User.findById(userId);

    if (!user) {
      console.log('User not found in the database.');
      return res.status(404).json({ message: 'Utente non trovato.' });
    }

    res.json({
      id: user._id,
      username: user.username,
      password: user.password,
      email: user.email
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la richiesta dei dettagli dell\'utente.' });
  }
};

// Aggiorna dettagli utente con autenticazione JWT
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  const token = req.headers.authorization.split(' ')[1]; // Assicurati che il token sia incluso nell'header

  // Verifica del token
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Token non valido.' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }

    res.json({ user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante l\'aggiornamento dell\'utente.' });
  }
};

// Elimina utente con autenticazione JWT
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const token = req.headers.authorization.split(' ')[1]; // Assicurati che il token sia incluso nell'header

  // Verifica del token
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Token non valido.' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }

    res.json({ message: 'Utente eliminato con successo.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante l\'eliminazione dell\'utente.' });
  }
};
