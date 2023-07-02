const { Router } = require("express");
const DebtController = require("../resourses/debt/debt.controller");
const { Validate, DebtValidator } = require("../validator");

const router = Router();
const debtController = new DebtController()

router.get("/:id",  debtController.findOne)
router.get("/",  debtController.paginate)
router.post("/", Validate(DebtValidator.create), debtController.create)
router.patch("/:id",  debtController.update)
router.delete("/:id",  debtController.delete)

module.exports = router;