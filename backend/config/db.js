const mongoose = require('mongoose');
const URI = process.env.MONGO_URI||"mongodb+srv://vikrantkumar92498:8ZJzp73HAdXxgC3m@cluster0.n5vchd5.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error connecting to database : ${error.message}`);
        process.exit();
    }

};

module.exports = connectDB;