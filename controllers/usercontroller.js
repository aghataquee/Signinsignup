const User=require('../models/schema.js');
exports.home=(req,res)=>{
    res.send("Hello Taquee Agha")
}
exports.createUser=async (req,res)=>{
    try{
        const {Name,Email,Password}=req.body;
        if(!Name||!Email){
            throw new Error("Name or Email is required")
        }
        const user=await User.create({
            Name:Name,
            Email:Email,
            Password:Password
        })
        res.status(200).json({
            success:true,
            message:"Account Created Successfully",
            user
        })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:" error generated"
        })
    }
    

}
exports.signin=async (req,res)=>{
    try{
        const {Name,Email}=req.body;
        if(!Name || !Email){
            throw new Error("Name and Email are required")
        }
        const userdetails=await User.create({
            Name:Name,
            Email:Email
        })
        res.status(200).json({
            success:true,
            message:"user loggedin Successfully",
            userdetails
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Invalid details"
        })
    }
}