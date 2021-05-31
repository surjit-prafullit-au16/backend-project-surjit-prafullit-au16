
require('dotenv').config()
const express = require('express')
const config = require('./config/config')
// const cookieParser = require('cookie-parser')

const app = express()                       //initialising express

const register = require('./controller/route.js');
app.use('/', register);

app.listen(process.env.PORT,()=>{
    console.log(`Listening to port http://localhost:${process.env.PORT}`)
})