const { Router } = require("express");
const router = Router()

router.get('', (_, res)=> res.send(require('./../package.json').version))
router.use('/login', require('./login.router'))
router.use('/signup', require('./signup.router.js'))

module.exports = router;