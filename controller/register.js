const express = require('express')
const router = express.Router();
const path = require('path');
const db = require('../config/db')
const bcrypt = require('bcrypt')
const User = require('../model/UserSchema')

router.use(express.urlencoded({extended: true}))
router.use(express.json()) // using the body-parser module

router.post('/register', async (req,res)=>{
    await User.findOne({email: req.body.email},(err,user)=>{
        if(user){
            res.send("User already registered!")
        }
        else{
            bcrypt.hash(req.body.password, 10,function(err, hash){    //hashing the password using bcrypt
                User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    is_admin: req.body.is_admin   
                },(error,user)=>{
                    if(error){
                        return console.log("error in adding user")
                    }
                })
            })
            res.send("user registered successfully")
        }
})
})


module.exports = router;