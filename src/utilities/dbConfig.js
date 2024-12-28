import mongoose from "mongoose";

export async function connect(){
    
    try {
       await  mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log('Mongodb connected Sussfully')
        })
        connection.on('error',(err)=>{
            console.log('Please Make sure your Mongodb  is running' +err)
            process.exit(1)
        })
    } catch (error) {
        console.log('Something went Wrong');
        console.log(error);
    }
}

