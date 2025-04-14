import user from "../model/user.js";

export const profile = async(req,res)=>{
    const data = req.user;
    const profileData = await user.findOne({email:data.email});
    res.send({profileData})
}