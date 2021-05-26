const express = require('express')
const config = require('./config/config')

const app = express()                       //initialising express

const register = require('./controller/register');
app.use('/', register);

app.listen(config.port,()=>{
    console.log(`Listening to port http://localhost:${config.port}`)
})