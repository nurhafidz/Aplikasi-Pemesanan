const router = require("express").Router();
const loginController = require("../controllers/login.controller");
const verifyUser = require("../middlewares/verify");

router.get("/", verifyUser.isLogout, loginController.login);
router.get("/logout", loginController.logout);

router.post("/auth", loginController.loginAuth);

module.exports = router;
