import express from "express";
import { Users } from "./models/users.js";

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/data", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Errore durante il recupero degli utenti." });
  }
});

// userRouter.post("/register", async (req, res) => {
//   const { nickname, email, password } = req.body;

//   try {
//     const newUser = await Users.create({ nickname, email, password });
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: "Errore durante la registrazione dell'utente." });
//   }
// });

// export default userRouter;

export default userRouter;