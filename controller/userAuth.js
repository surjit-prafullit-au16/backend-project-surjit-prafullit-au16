const bcrypt = require('bcrypt')
const User = require('../model/UserSchema')
const jwt = require('jsonwebtoken')

module.exports = {
    register: async (req, res) => {
        await User.findOne({ email: req.body.email }, (err, user) => {
            if (user) {
                return res.send("User already registered. Please Login with email & password")
            }
            bcrypt.hash(req.body.password, 10, function (err, hash) {
                User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    is_admin: req.body.is_admin
                }, (error, user) => {
                    if (error) {
                        return res.send("error in adding user")
                    }
                    res.send("user registered successfully")
                    
                })
            })
        })
    },

    login: async (req, res) => {
        await User.findOne({ email: req.body.email }, (err, user) => {
            if (!user) {
                return res.send("No user found, register first!")
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (!result) {
                    return res.send("Invalid password")
                }
                const token = jwt.sign({ id: user._id }, process.env.secret, { expiresIn: 3600 })
                res.cookie("token", token)
                res.send(`Welcome ${user.name}`)
            })
        }
        )
    },
    logout: (req, res) => {
        res.clearCookie('token');
        res.send('Logged out, Hope to see you again!')
    }
}
    
