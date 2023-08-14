const mongoose=require('mongoose');
const Userschema=new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[20,"Name should be lesser than 20 characters"]
    },
    Email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    Password:{
        type:String,
        maxLength:[14,"Password should not be greater than 14"]
    }

})
module.exports=mongoose.model("User",Userschema);