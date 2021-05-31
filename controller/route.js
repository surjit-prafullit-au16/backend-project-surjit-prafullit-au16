const express = require('express')
const router = express.Router();
const path = require('path');
const auth = require('./auth')
const cookieParser = require('cookie-parser');

const registerHandler = require('./register');
const loginHandler = require('./login');
const movieHandler = require('./movie')
const ratingHandler = require('./rating');

router.use(cookieParser())
router.use(express.urlencoded({extended: true}))
router.use(express.json()) 

router.post('/register', registerHandler)
router.post('/login', loginHandler)
router.post('/movie',auth, movieHandler)
router.post('/rating',auth, ratingHandler)



module.exports = router;