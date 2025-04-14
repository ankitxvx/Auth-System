import user from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    
    if (!email || !fullName || !password) {
        return res.status(400).send({
            message: "Important fields are required"
        });
    }
    
    try {
        const check = await user.findOne({ email: email });
        
        if (check) {
            return res.status(409).send({
                message: "User already exists, please login"
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await user.create({
            fullName,
            email,
            password: hashedPassword
        });
        
        return res.status(201).send({
            message: "User created successfully, now login"
        });
    } catch (error) {
        return res.status(500).send({
            message: "Server error",
            error: error.message
        });
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).send({
            message: "Email and password are required"
        });
    }
    
    try {
        const check = await user.findOne({ email: email });
        
        if (!check) {
            return res.status(404).send({
                message: "Please register first"
            });
        }
        
        const passOk = await bcrypt.compare(password, check.password);
        
        if (!passOk) {
            return res.status(401).send({
                message: "Password is incorrect"
            });
        }
        
        const token = jwt.sign(
            { id: check._id, email: email },
            process.env.JWT,
            { expiresIn: '7d' }
        );
        
        res.cookie('token', token,{sameSite:'none', secure:true});
        
        return res.send({
            message:'successful'
        })
    } catch (error) {
        return res.status(500).send({
            message: "Server error",
            error: error.message
        });
    }
};