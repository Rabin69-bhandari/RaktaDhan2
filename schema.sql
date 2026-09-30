-- Fresh database schema; IF NOT EXISTS does not migrate existing tables.
CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL,
 email VARCHAR(254) NOT NULL UNIQUE, password TEXT NOT NULL,
 onboarding_step INTEGER NOT NULL DEFAULT 0,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- password stores a bcrypt hash.
CREATE TABLE IF NOT EXISTS blood_activity (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 kind VARCHAR(10) NOT NULL CHECK (kind IN ('donation','request')),
 name VARCHAR(160) NOT NULL, phone VARCHAR(20) NOT NULL,
 city VARCHAR(160) NOT NULL, hospital VARCHAR(160) NOT NULL,
 blood_group VARCHAR(3) NOT NULL CHECK (blood_group IN ('A+','A−','B+','B−','AB+','AB−','O+','O−')),
 target_date DATE NOT NULL, preferred_time TIME,
 units INTEGER CHECK (units BETWEEN 1 AND 20),
 urgency VARCHAR(10) CHECK (urgency IN ('Routine','Urgent','Critical')),
 notes VARCHAR(1000) NOT NULL DEFAULT '', status VARCHAR(12) NOT NULL,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 CHECK ((kind='donation' AND preferred_time IS NOT NULL AND units IS NULL AND urgency IS NULL AND status IN ('Scheduled','Cancelled'))
 OR (kind='request' AND preferred_time IS NULL AND units IS NOT NULL AND urgency IS NOT NULL AND status IN ('Open','Cancelled')))
);
CREATE INDEX IF NOT EXISTS blood_activity_user_created_idx ON blood_activity(user_id,created_at DESC);
