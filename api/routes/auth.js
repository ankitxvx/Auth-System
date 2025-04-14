import express from 'express'
import { signup,signin } from '../controllers/auth.js';
import isAuth from '../middleware/isAuth.js';
 
const authroute  = express.Router();
 
authroute.post('/register',signup);
authroute.post('/login',signin);

export default authroute