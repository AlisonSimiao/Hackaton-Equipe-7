const { Router } = require("express");
const auth = require("../middleware/auth.middleware");

const router = Router()

router.use(auth)
router.use('/gender', require('./gender.router'))
router.use('/points', require('./point.router'))
router.use('/debts', require('./debt.router'))

module.exports = router;