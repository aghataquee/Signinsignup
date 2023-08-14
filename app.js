require('dotenv').config();
const cors=require('cors');
const express=require('express');
const connectionToDB=require('./config/db.js');
const userRoutes=require('./routes/userroutes.js');
const app=express();
//database connection
connectionToDB();
// sending data in json format
app.use(express.json());
// sending data in decoded form
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/",userRoutes);


module.exports=app;