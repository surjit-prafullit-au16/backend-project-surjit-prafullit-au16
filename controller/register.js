const db = require('../config/db')
const bcrypt = require('bcrypt')
const User = require('../model/UserSchema')
const router = require('./route');

// router.use(express.urlencoded({extended: true}))
// router.use(express.json())

const registerHandler = async (req,res)=>{
    await User.findOne({email: req.body.email},(err,user)=>{
        if(user){
            return res.send("User already registered!")
        }
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
})
};

module.exports = registerHandler