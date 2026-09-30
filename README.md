# BloodConnect — college project

React + Express + PostgreSQL portal with a calm teal/slate theme, donation plans, blood requests, activity history and cancellation.

## Demo without a database
Requires Node.js 22.12+.
```
cd frontend
npm install
npm run dev
```
Open http://localhost:5173 and click **Explore demo**. Demo submissions use localStorage; demo sign-in uses sessionStorage. No appointments or alerts are sent.

## Full application
1. Create a PostgreSQL database named BloodManagementPortal using pgAdmin.
2. Execute schema.sql in that database. This is a fresh schema; inspect/migrate an existing users table before using it.
3. Copy backend/.env.example to backend/.env and supply DATABASE_URL and a long random JWT_SECRET.
4. In a separate terminal:
```
cd backend
npm install
npm start
```
5. Start the frontend and register an account (password at least 8 characters). Vite proxies /api to port 3000. Regular accounts store activity in PostgreSQL.

## Features
- /donate: donor, blood group, contact, city, center, preferred date/time, notes.
- /request: patient, group, contact, city, hospital, date, units, urgency, notes.
- /history: filter activities and cancel your own submissions.
- /profile and /settings: account details and mode explanation.
- /login and /register: cookie-based authentication.

GET/POST /api/activity and PATCH /api/activity/:id/cancel require authentication and scope activity to the authenticated user. SQL is parameterized. Scheduled means a saved donation plan; Open means a recorded request. Hospital confirmation, real donor matching and notifications are not implemented.

## Deployment
Run npm run build in frontend. Serve dist with SPA fallback and proxy /api to the backend. Configure FRONTEND_ORIGIN, DATABASE_URL, JWT_SECRET and NODE_ENV. Production cookies require HTTPS. Original nested backend ZIP, node_modules and real credentials are excluded.
