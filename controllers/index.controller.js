module.exports = {
    index: async (req, res) => {
        return res.render("index", {
            userName: req.session.nama_kasir,
        });
    },
};
