module.exports = {
    login: async (req, res) => {
        let x = req.cookie.secret;
        return res.render("auth/login", { x });
    },
    setLogin: async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        return res.render("auth/login");
    },
};
