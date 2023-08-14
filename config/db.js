const mongoose=require('mongoose');
const connectToDB=async ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`The database is connected to ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log("error generated is",error);
        process.exit(1);
    })
}
module.exports=connectToDB;