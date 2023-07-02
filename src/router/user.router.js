const { Router } = require("express");
const router = Router();


router.use("/:idUser/finances",  require("./finance.router") );


module.exports = router;