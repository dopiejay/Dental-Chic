import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const { rows } = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, phone || null, message]
    );
    res.status(201).json({ id: rows[0].id, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('POST /api/contact error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;
