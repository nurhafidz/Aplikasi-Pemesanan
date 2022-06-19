const Pesanan = require('../models/Pesanan');

module.exports = {
    index: async (req, res) => {
        const pesanan = await Pesanan.findAll();
        return res.render('pesanan/index', { pesanan });   
    },

    create: async (req, res) => {
        return res.render('pesanan/create');
    },

    store: async (req, res) => {
        await Pesanan, create({
            id_menu: req.body.id_menu,
            id_kasir: req.body.id_kasir,
            waktu_pemesanan: req.body.waktu_pemesanan,
            harga: req.body.harga,
            nomor_meja: req.body.nomor_meja,
            qty: req.body.qty,
            status: req.body.status
        })

        return res.redirect('/pesanan');
    },

    edit: async (req, res) => {
        const pesanan = await Pesanan.findByPk(req.params.id);
        
        if (!post) {
            return res.redirect('/pesanan');
        }

        return res.render('pesanan/edit', { pesanan });
    },

    update: async (req, res) => {
        const pesanan = await Pesanan.findByPk(req.params.id);

        if(!pesanan) {
            return res.redirect('/pesanan');
        }

        await pesanan.update({
            // id_menu: req.body.id_menu,
            // id_kasir: req.body.id_kasir,
            waktu_pemesanan: req.body.waktu_pemesanan,
            harga: req.body.harga,
            nomor_meja: req.body.nomor_meja,
            qty: req.body.qty,
            status: req.body.status
        });
    },

    destroy: async (req, res) => {
        const pesanan = await Pesanan.findByPk(req.params.id);

        if(!pesanan) {
            return res.redirect('/pesanan');
        }

        await pesanan.destroy();

        return res.redirect('/pesanan');
    }
}