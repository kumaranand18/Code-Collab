const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const requireLogin = require('../middleware/requireLogin')

router.put('/addroom',requireLogin,(req,res)=>{
    console.log(req.body);
    User.findByIdAndUpdate(req.user._id,{
        $push:{rooms:req.body.room}
    },(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("User Updated",docs);
        }
    })
})

module.exports=router