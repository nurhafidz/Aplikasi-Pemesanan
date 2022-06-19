const Kasir = require("../models/Kasir");
var bcrypt = require("bcrypt");

module.exports = {
    login(req, res) {
        res.render("auth/login", {
            colorFlash: req.flash("color"),
            statusFlash: req.flash("status"),
            pesanFlash: req.flash("message"),
            userName: req.session.nama_kasir,
        });
    },
    loginAuth: async (req, res) => {
        let email = req.body.email;
        let password = req.body.pass;

        const result = await Kasir.findOne({
            where: { email: email },
        });
        var hash = bcrypt.compareSync(password, result.password);

        if (hash) {
            req.session.loggedin = true;
            req.session.userid = result.id;
            req.session.nama_kasir = result.name_kasir;
            res.redirect("/");
        } else {
            res.redirect("/login");
            res.end();
        }
    },
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            }
            res.clearCookie("secretname");
            res.redirect("/login");
        });
    },
};
