const express=require('express');
const dotenv = require('dotenv');
const {chats}  = require('./data/data');
const connectDB =require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
connectDB();
const app=express(); //Instance of express
app.use(express.json()) //because we are taking value from frontend , to tell server to accept json data
app.get('/',(req,res)=>{
    res.send("API is running");
})
app.use('/api/user',userRoutes)
const PORT=process.env.PORT || 5000; //To be corrected
app.listen(PORT,console.log(`Server running on port ${PORT}`));
