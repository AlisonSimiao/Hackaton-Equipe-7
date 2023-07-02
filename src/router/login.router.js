const { Router } = require("express");
const {Validate, LoginValidator} = require("../validator");
const LoginController = require("../resourses/login/login.controller");

const router = Router();
const loginController = new LoginController()

router.post("/", Validate(LoginValidator), loginController.create)

module.exports = router;