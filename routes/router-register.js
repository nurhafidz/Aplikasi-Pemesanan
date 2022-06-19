const router = require("express").Router();
const registerController = require("../controllers/register.controller");
const verifyUser = require("../middlewares/verify");

router.get("/", verifyUser.isLogout, registerController.formRegister);
router.post("/save", verifyUser.isLogout, registerController.saveRegister);

module.exports = router;
