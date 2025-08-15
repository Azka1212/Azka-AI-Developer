-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

-- Enable Row Level Security (optional, for better security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (you can modify this based on your needs)
CREATE POLICY "Allow public inserts" ON contact_submissions
FOR INSERT TO public
WITH CHECK (true);

-- Create a policy to allow reads (modify based on your admin needs)
CREATE POLICY "Allow admin reads" ON contact_submissions
FOR SELECT TO authenticated
USING (true);
