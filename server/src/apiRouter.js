// routes/apiRouter.js
import express from 'express';
import { registerUser, loginUser,resetPassword } from './controllers/authController.js';
import { getUsers } from './controllers/userController.js';
import { createReport, getReports } from './controllers/reportController.js';
import { createTestimonial, getTestimonials } from './controllers/testimonialController.js';
import { getUserById } from './controllers/userController.js';
import { entiPrepostiLogin, entiPrepostiRegister } from './controllers/entiPrepostiController.js';
import entiPrepostiUser from './models/entiprepostiuser.js';

const apiRouter = express.Router();

// Rotte per la registrazione e il login , password request
apiRouter.post('/register', registerUser);
apiRouter.post('/login', loginUser);
apiRouter.get('/users', getUsers);
apiRouter.get('/users/:id', getUserById);
apiRouter.post('/reset-password', resetPassword);

// Rotte per le segnalazioni
apiRouter.post('/segnala-abuso', createReport);
apiRouter.get('/reports', getReports);

// Rotte per le testimonianze
apiRouter.post('/invia-testimonianza', createTestimonial);
apiRouter.get('/testimonials', getTestimonials);

// Rotta enti preposti

apiRouter.post('/enti-preposti-login', entiPrepostiLogin);
apiRouter.post('/enti-preposti-register', entiPrepostiRegister);
apiRouter.get('/enti-preposti-users/:id', entiPrepostiUser);

export default apiRouter;
