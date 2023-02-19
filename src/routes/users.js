const {User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();


router.post("/",async(req,res)=>{

    try{

        const {error} = validate(req.body);
 
        if(error){
            return res.status(400).send(error.details[0].message);
        }
   
        const user = await new User(req.body).save();

        console.log("pushed data");
        res.send(user);


    }catch(err){
        res.send("An error occured to post user data");
        console.log(err);
    }


})

module.exports = router;