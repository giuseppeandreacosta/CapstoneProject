import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import apiRouter from "./apiRouter.js";
import dotenv from "dotenv";

const server = express();
const port = process.env.PORT || 3030;

// Carica le variabili d'ambiente da un file .env
dotenv.config();

// Middleware per consentire richieste da qualsiasi origine
server.use(cors());

// Middleware per gestire il parsing del corpo della richiesta come JSON
server.use(express.json());

// Connessione al database MongoDB 
// console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose.connect("mongodb+srv://giuseppeandreac:zTvq3btosxdLdN3o@noallaviolenza.ikdmlo6.mongodb.net/NoAllaViolenzaDb",)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to MongoDB. Check credentials.", err);
  });



// Collegamento delle rotte API
server.use("/api", apiRouter);
