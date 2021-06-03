require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
require('./config/db')
const PORT = process.env.PORT || 3000

const app = express()                

app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

const allRouter = require('./routes/index');
app.use('/', allRouter);

app.listen(PORT,()=>{
    console.log(`Listening to port http://localhost:${PORT}`)
})