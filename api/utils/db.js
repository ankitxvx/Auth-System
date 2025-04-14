import mongoose from 'mongoose'

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('DB connected succssfully')
    }).catch((err)=>{
        console.log(err.message)
    });
}
export default connectDB;