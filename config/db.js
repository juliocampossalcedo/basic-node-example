import mongoose from "mongoose";

const conectarDB = async() => {
    try {
        //create your .env and provider this value for testing
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`Mongodb conectado a : ${url}` );
    } catch (error) {
        console.log('error: ${error.message}');
        process.exit(1);
    }
}

export default conectarDB;