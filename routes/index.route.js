const indexController = require("../controllers/index.controller");
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
const verifyUser = require("../middlewares/verify");

const router = require("express").Router();

// router.get("/", indexController.index);
router.get("/", verifyUser.isLogin, indexController.index);

module.exports = router;
