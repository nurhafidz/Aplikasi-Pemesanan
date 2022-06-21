const indexController = require("../controllers/index.controller");
const authController = require("../controllers/auth.controller");
const PesananController = require("../controllers/pesanan.controller");
const verifyUser = require("../middlewares/verify");
const router = require("express").Router();

// router.get("/", indexController.index);
router.get("/", verifyUser.isLogin, indexController.index);

// route pemesanan
router.get("/pesanan", verifyUser.isLogin, PesananController.index);
router.get("/pesanan/create", verifyUser.isLogin, PesananController.create);
router.post("/pesanan/store",PesananController.store);
router.get("/pesanan/edit/:id", verifyUser.isLogin, PesananController.edit);
router.post("/pesanan/update/:id", verifyUser.isLogin, (req,res) => {
    PesananController.update
});
router.post("/pesanan/delete/:id", verifyUser.isLogin, (req, res) => {
   PesananController.destroy 
}) 



router.get("/logout", verifyUser.isLogout, indexController.index);
module.exports = router;
