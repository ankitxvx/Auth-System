import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authroute from './routes/auth.js'
import connectDB from './utils/db.js'
import isAuth from './middleware/isAuth.js'
import cookieParser from 'cookie-parser';
import profileRoute from './routes/profile.js'
 
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(cors(
   { origin: 'http://localhost:5173', // Frontend ka URL
    credentials: true // Cookies ke liye}
   }
));

dotenv.config();

app.get('/test',(_req,res)=>{
    res.status(200).send({message: "server is running and fine!!!"});
})
 
connectDB()
 app.use('/',profileRoute)
app.use('/',authroute);

const port = 8080;
app.listen(port , ()=>{
    console.log("server running successfully");
})