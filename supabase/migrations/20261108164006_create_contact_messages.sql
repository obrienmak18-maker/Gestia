/*
# Create contact_messages table

1. New Tables
- `contact_messages`: messages envoyés depuis le formulaire de contact du site.
  - `id` (uuid, primary key)
  - `name` (text, required, max 120 chars)
  - `email` (text, required, max 254 chars)
  - `phone` (text, optional, max 30 chars)
  - `company` (text, optional, max 160 chars)
  - `message` (text, required, max 2000 chars)
  - `created_at` (timestamptz)

2. Security
- RLS enabled on `contact_messages`.
- Visitors (anon) and signed-in users can only INSERT a message.
- No SELECT, UPDATE or DELETE is granted, so submitted messages are never exposed publicly.
- Length checks protect the table from oversized submissions.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 30),
  company text CHECK (company IS NULL OR char_length(company) <= 160),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
