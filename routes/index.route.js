const indexController = require("../controllers/index.controller");
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
const PesananController = require("../controllers/pesanan.controller");

const router = require("express").Router();

router.get("/", indexController.index);
// route login
const verifyUser = require("../middlewares/verify");


// router.get("/", indexController.index);
router.get("/", verifyUser.isLogin, indexController.index);


// route pemesanan
router.get("/pesanan", verifyUser.isLogin, PesananController.index);
router.get("/pesanan/create", verifyUser.isLogin, PesananController.create);
router.post("/pesanan/store", verifyUser.isLogin, (req, res) => {
    PesananController.store
});
router.get("/pesanan/edit/:id", verifyUser.isLogin, PesananController.edit);
router.post("/pesanan/update/:id", verifyUser.isLogin, (req,res) => {
    PesananController.update
});
router.post("/pesanan/delete/:id", verifyUser.isLogin, (req, res) => {
   PesananController.destroy 
}) 



module.exports = router;
