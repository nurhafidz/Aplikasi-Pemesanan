const Kasir = require("../models/Kasir");
var bcrypt = require("bcrypt");

module.exports = {
    formRegister(req, res) {
        res.render("auth/register", {});
    },
    saveRegister: async (req, res) => {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.pass;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);

        if (username && email && hash) {
            Kasir.create({
                name_kasir: username,
                email: email,
                password: hash,
            });
            req.flash("color", "success");
            req.flash("status", "Yes..");
            req.flash("message", "Registrasi berhasil");
            res.redirect("/login");
        } else {
            res.redirect("/login");
            res.end();
        }
    },
};
