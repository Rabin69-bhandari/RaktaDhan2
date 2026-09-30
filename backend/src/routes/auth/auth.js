import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from '../../config/db.js'
import { protect } from '../../middleware/auth.js'
const router = express.Router()

const cookieOptions = {
    httpOnly : true,
    secure : process.env.NODE_ENV === "production",
    sameSite : 'Strict',
    maxAge : 30* 24 * 60 * 60 * 1000 

}

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn : '30d'
    })
}

router.post("/register",async (req,res)=>{
   const {name,email,password} = req.body

   if(!name || !email || !password){
    return res.status(400).json({message : 'Please provide all required fields'})
   }

   if(typeof name !== 'string' || !name.trim() || name.length>100 || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || typeof password !== 'string' || password.length<8 || Buffer.byteLength(password)>72) return res.status(400).json({message:'Provide a valid name, email and password (8–72 bytes).'});
   const userExits = await pool.query("Select * from users WHERE email = $1",[email])


   if(userExits.rows.length > 0){
    return res.status(400).json({message : 'User already exists'})
   }

   const hashedPassword = await bcrypt.hash(password,10)

   const newUser = await pool.query('INSERT into users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email,onboarding_step',[name,email,hashedPassword])

  const token = generateToken(newUser.rows[0].id)

  res.cookie('token',token, cookieOptions )

  return res.status(201).json({users : newUser.rows[0]})
  
})


router.post('/login',async (req,res)=>{

    console.log(process.env.JWT_SECRET)
    const {email,password} = req.body


    if(!email || !password){
        return res.status(400).json({message : 'Please provide required field'})
    }

    if(typeof email!=='string'||typeof password!=='string'||Buffer.byteLength(password)>72)return res.status(400).json({message:'Invalid credentials'});
    const user = await pool.query('Select * from users where email = $1',[email])

    if(user.rows.length === 0){
        return res.status(400).json({message : 'Invalid Credentials'})
    }

    const userData = user.rows[0]

    const isMatch = await bcrypt.compare(password,userData.password)

    if(!isMatch){
        return res.status(400).json({message : 'Invalid Credentials'})
    }
   
    const token = generateToken(userData.id)

     res.cookie('token',token, cookieOptions )

  return res.status(201).json({users : {id : userData.id , name : userData.name , email : userData.email, onboarding_step : userData.onboarding_step}})

})

router.get('/me',protect, (req,res) => {
    res.json(req.user)
})

router.post('/logout', (req,res) => {
    res.cookie('token', '', {...cookieOptions , maxAge : 1})
    res.json({message : 'Logout SuccessFully'})
})

export default router