const { Router } = require("express");

const router = Router()

router.use('/login', require('./login.router'))
//router.use('/signup', require('./signup.router.js'))
router.use('/gender', require('./gender.router'))
module.exports = router;