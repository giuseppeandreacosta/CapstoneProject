import User from '../models/users.js';

// Ottieni la lista degli utenti
export const getUsers = async (req, res) => {
  try {
    const userList = await User.find(); // Utilizza il metodo find del tuo modello User per ottenere gli utenti dal database

    res.json({ users: userList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la richiesta degli utenti.' });
  }
};

// Modifica la funzione getUserById nel tuo userController.js
export const getUserById = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Utente non trovato.' });
      }
  
      // Restituisci i dettagli dell'utente
      res.json({
        id: user._id,
        username: user.username,
        email: user.email,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Errore durante la richiesta dei dettagli dell\'utente.' });
    }
  };
  

// Aggiorna i dettagli di un utente
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

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

// Elimina un utente
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

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
