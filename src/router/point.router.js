const { Router } = require("express");
const PointController = require("../resourses/point/point.controller");

const router = Router();
const pointController = new PointController()

router.get("",  pointController.findOne)
router.patch("/:points",  pointController.update)

module.exports = router;