import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/createadmin",async (req,res)=>{

    try{
        const user = new User({
            name:"Basir",
            email:"yankaiquecosta.yk@gmail.com",
            password:"123",
            isAdmin:true
        });
    
        const newUser = await user.save();
        res.send(newUser);
    }catch(error){
        res.send({msg:error.message});
    }
});

export default router;