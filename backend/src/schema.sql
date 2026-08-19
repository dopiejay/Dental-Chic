-- Dental Chic — database schema
-- Run via `npm run migrate`, or paste directly into the Neon SQL editor.

CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id),
  service_name TEXT NOT NULL, -- denormalized snapshot in case the service list changes later
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL, -- 'Morning (9am–12pm)' | 'Afternoon (12pm–4pm)'
  status TEXT NOT NULL DEFAULT 'pending', -- pending | confirmed | cancelled | completed
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed the six services from the concept site
INSERT INTO services (name) VALUES
  ('General Check-up & Cleaning'),
  ('Teeth Whitening'),
  ('Braces & Orthodontics'),
  ('Crowns & Bridges'),
  ('Root Canal Treatment'),
  ('Not sure — advise me')
ON CONFLICT DO NOTHING;
