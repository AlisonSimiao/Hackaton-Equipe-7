const { Router } = require("express");
const GenderController = require("../resourses/gender/gender.controller");

const router = Router();
const genderController = new GenderController()

router.get("/",  genderController.paginate)

module.exports = router;