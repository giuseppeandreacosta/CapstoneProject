# CapstoneProject Costa Giuseppe Andrea
 Progetto finale - Epicode 




 Descrizione
La WebApp Contro la Violenza è un'applicazione che offre uno spazio sicuro per gli utenti che desiderano segnalare abusi e condividere testimonianze. L'applicazione consente agli utenti di registrarsi e accedere, segnalare abusi, leggere/inviare testimonianze, e fornisce un'interfaccia per gli enti preposti al controllo delle segnalazioni.

Prerequisiti
Prima di iniziare, assicurati di avere installati i seguenti requisiti:

React
react-router-dom
Bootstrap
Express.js
Bcrypt
JSON Web Token (JWT)
MongoDB
Puoi installare le dipendenze frontend eseguendo:

bash
Copy code
cd client
npm install
E le dipendenze backend eseguendo:

bash
Copy code
cd server
npm install
Configurazione
MongoDB
Installa MongoDB: Assicurati di avere MongoDB installato nel tuo sistema. Segui le istruzioni ufficiali sul sito web di MongoDB per l'installazione.

Connessione al Database: Configura il tuo backend per connettersi a MongoDB. Modifica il file di configurazione (ad esempio, config.js o config.json) con le informazioni di connessione, come l'URL del database, la porta e le credenziali.

json
Copy code
// backend/config.json

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
Installazione
Per avviare l'applicazione, esegui i seguenti comandi:

bash
Copy code
# Installa le dipendenze frontend e avvia l'applicazione
npm install
npm start

# Installa le dipendenze backend e avvia il server
cd server
npm install
npm start
Configurazione del Database
Esegui le migrazioni del database (se necessario)
bash
Copy code
npm run migrate
Esegui lo script di seeding dei dati (solo in sviluppo)
bash
Copy code
node server/seed.js


Account enti preposti 
username : polizia , password : polizia@ ;
username : coopSole , password : cooperativa!;

Utilizzo
Autenticazione Utente
POST /api/register: Registra un nuovo utente.
POST /api/login: Effettua il login dell'utente.
Gestione Utenti
GET /api/users: Ottiene la lista di tutti gli utenti.
GET /api/users/:id: Ottiene un utente specifico per ID.
POST /api/reset-password: Reimposta la password di un utente.
Gestione Segnalazioni
POST /api/segnala-abuso: Crea una nuova segnalazione di abuso.
GET /api/reports: Ottiene la lista di tutte le segnalazioni.
Gestione Testimonianze
POST /api/invia-testimonianza: Invia una nuova testimonianza.
GET /api/testimonials: Ottiene la lista di tutte le testimonianze.
Enti Preposti
POST /api/enti-preposti-login: Effettua il login degli enti preposti.
POST /api/enti-preposti-register: Registra un nuovo ente preposto.
GET /api/enti-preposti-users/:id: Ottiene un ente preposto specifico per ID.




Contatti
Per ulteriori informazioni o assistenza, contattare Giuseppe Andrea all'indirizzo email: giuseppeandreac@gmail.com.
