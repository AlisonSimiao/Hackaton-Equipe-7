const { Router } = require("express");

const router = Router()

router.use('/login', require('./login.router'))
router.use('/signup', require('./signup'))

module.exports = router;