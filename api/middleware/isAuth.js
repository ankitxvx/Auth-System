import jwt from 'jsonwebtoken'

function isAuth(req,res,next){

    const token = req.cookies?.token;  
 
    if (!token) {
        
        return res.redirect('/login');
      }
    try{
    
        const decoded = jwt.verify(token,process.env.JWT);
        req.user = decoded;  
        next();
    }catch(err){
        
        return res.status(401).json({ message: "Not authenticated" });
    }
    
}

export default isAuth;