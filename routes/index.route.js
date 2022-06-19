const indexController = require("../controllers/index.controller");
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", indexController.index);

router.get("/login", authController.login);

module.exports = router;
