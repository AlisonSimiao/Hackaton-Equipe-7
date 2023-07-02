const { Router } = require("express");
const auth = require("../middleware/auth.middleware");

const router = Router()

router.use('/login', require('./login.router'))
router.use('/signup', require('./signup.router.js'))

router.use(auth)
router.use('/gender', require('./gender.router'))
router.use('/points', require('./point.router'))

module.exports = router;