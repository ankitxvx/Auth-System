import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
},{
    timestamps: true, 
    collection: 'users',    
})
const user = mongoose.model('User', UserModel);
export default user