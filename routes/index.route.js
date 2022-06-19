const indexController = require("../controllers/index.controller");
const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
const PesananController = require("../controllers/pesanan.controller");

const router = require("express").Router();

router.get("/", indexController.index);


// route pemesanan
router.get("/pesanan", auth, PesananController.index);
router.get("/pesanan/create", auth, PesananController.create);
router.post("/pesanan/store", auth, (req, res) => {
    PesananController.store
});
router.get("/pesanan/edit/:id", auth, PesananController.edit);
router.post("/pesanan/update/:id", auth, (req,res) => {
    PesananController.update
});
router.post("/pesanan/delete/:id", auth, (req, res) => {
   PesananController.destroy 
}) 


// route login
router.get("/login", authController.login);
const verifyUser = require("../middlewares/verify");

// router.get("/", indexController.index);
router.get("/", verifyUser.isLogin, indexController.index);

module.exports = router;
