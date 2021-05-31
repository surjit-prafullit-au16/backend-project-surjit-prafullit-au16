const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/UserSchema')

const loginHandler = async (req, res)=>{
    await User.findOne({email: req.body.email},(err,user)=>{
        if(!user){
            return res.send("No user found, register first!")
        } 
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if (!result){
                return res.send("Invalid password")
            } 
            const token = jwt.sign({id:user._id},process.env.secret,{ expiresIn:3600})
            res.cookie("token",token)
            res.send(`Welcome ${user.name}`)
        })
        }   
    )
}
module.exports = loginHandler