const express=require('express');
const {home,createUser,signin}=require('../controllers/usercontroller.js');
const router=express.Router();
router.get('/',home);
router.post('/createuser',createUser);
router.post('/login',signin);
module.exports=router;
