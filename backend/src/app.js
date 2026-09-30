import express from 'express'
import cors from 'cors'
import activity from './routes/activity.js'
import auth from './routes/auth/auth.js'
import cookieParser from 'cookie-parser'

const app = express()


app.use(
    cors({
        origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json())
app.use(cookieParser());



app.use("/api/auth", auth)


app.use('/api/activity', activity)
app.use((error, req, res, next) => { console.error(error.message); res.status(error.code === '23505' ? 409 : 500).json({ message: error.code === '23505' ? 'An account with that email already exists.' : 'Unable to complete the operation.' }) })
export default app