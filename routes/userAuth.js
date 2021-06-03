const { Router } = require('express');
const router = Router()
const auth = require('../controller/auth')
const userController = require('../controller/userAuth')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)


module.exports = router;