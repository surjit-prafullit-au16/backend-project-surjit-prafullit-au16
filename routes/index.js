const { Router } = require('express');
const auth = require('../controller/auth')
const userAuthRouter = require('./userAuth');
const movieHandler = require('../controller/movie')
const ratingHandler = require('../controller/rating');
const commentHandler = require('../controller/comment');
const adminHandler = require('../controller/admin')

const router = Router()

router.use('/',  userAuthRouter)
router.use('/movie',auth, movieHandler)
router.use('/rating',auth, ratingHandler)
router.use('/comment',auth, commentHandler)
router.use('/admin',auth, adminHandler)

module.exports = router;