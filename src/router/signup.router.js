

const { Router } = require("express");
const {Validate, UserValidator} = require("../validator");
const UserController = require("../resourses/user/user.controller.js");

const router = Router();
const userController = new UserController()

router.post("/", Validate(UserValidator.create), userController.create)

module.exports = router;