const express = require('express')
const router = express.Router();
const path = require('path');
// const loginHandler = require('./login');
const registerHandler = require('./register');
const loginHandler = require('./login');


router.use(express.urlencoded({extended: true}))
router.use(express.json()) // using the body-parser module

router.post('/register', registerHandler)
router.post('/login', loginHandler)



module.exports = router;