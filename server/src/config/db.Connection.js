import mongoose from 'mongoose';


const dbConnection = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        // console.log(connection);
        if(connection){
            console.log(`MongoDB connected !! DB HOST: ${connection.host}`);
        }
    }catch(error){
        console.log(error);
        console.error(error);
        process.exit(1);
    }
}

export default dbConnection;