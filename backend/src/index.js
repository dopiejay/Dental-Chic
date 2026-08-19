import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import servicesRouter from './routes/services.js';
import appointmentsRouter from './routes/appointments.js';
import authRouter from './routes/auth.js';

dotenv.config({ quiet: true });

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/services', servicesRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/auth', authRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Dental Chic API listening on port ${PORT}`);
});
