import mongoose from "mongoose";
export const connectDB = async () => {

try{

    const conn= await mongoose.connect(process.env.MONGODB_URI)
    console.log('mongodb connected successfully on host:',conn.connection.host)
    // console.log(`mongodb connected successfully on host: ${conn.connection.host}`)

  }
  catch(error){  
    console.error('mongodb connection failed with error:',error)
    process.exit(1)


   }
  }

  