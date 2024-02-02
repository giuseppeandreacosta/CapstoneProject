// routes/apiRouter.js
import express from 'express';
import { registerUser, loginUser } from './controllers/authController.js';
import { getUsers } from './controllers/userController.js';
import { createReport, getReports } from './controllers/reportController.js';
import { createTestimonial, getTestimonials } from './controllers/testimonialController.js';
import { createEntiPreposti } from './controllers/userEnti.js';

const apiRouter = express.Router();

// Rotte per la registrazione e il login
apiRouter.post('/register', registerUser);
apiRouter.post('/login', loginUser);
apiRouter.get('/users', getUsers);

// Rotte per le segnalazioni
apiRouter.post('/segnala-abuso', createReport);
apiRouter.get('/reports', getReports);

// Rotte per le testimonianze
apiRouter.post('/invia-testimonianza', createTestimonial);
apiRouter.get('/testimonials', getTestimonials);

// Rotta enti preposti

apiRouter.post('/enti-preposti-login', createEntiPreposti);

export default apiRouter;
