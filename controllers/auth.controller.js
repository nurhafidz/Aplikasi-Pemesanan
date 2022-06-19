module.exports = {
    login: async (req, res) => {
        const name = "gus";

        return res.render("auth/login", {
            name,
        });
    },
};
