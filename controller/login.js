const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const User = require('../model/UserSchema')



const loginHandler = async (req, res)=>{
    await User.findOne({email: req.body.email},(err,user)=>{
        if(!user) return res.send("No user found, register first!")
        else{
            const passIsValid = bcrypt.compare(req.body.password, user.password) //comparing the password
            if (!passIsValid) return res.send("Invalid password")
            else{
                const token = jwt.sign({id:user._id},config.secret,{ expiresIn:3600})
                User.findOneAndUpdate({email: req.body.email}, {$set: {is_active: true, key: token}},function(err,result){
                    if(err){
                        console.log(err)
                    } 
                })
                res.cookie("token",token)
                console.log(token)
                res.send(`Welcome ${user.name}`)
            }
        }
})
}

module.exports = loginHandler