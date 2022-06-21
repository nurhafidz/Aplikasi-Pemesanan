const Pesanan = require('../models/Pesanan');
const Menu = require('../models/Menu');
const Kasir = require('../models/Kasir');


module.exports = {
    index: async (req, res) => {
        const pesanan = await Pesanan.findAll();
        return res.render('pesanan/index', { pesanan });   
    },

    create: async (req, res) => {
        const menu = await Menu.findAll();
        const kasir = await Kasir.findAll();
        return res.render('pesanan/create', {menu,kasir});
    },

    store: async (req, res) => {
        await Pesanan.create({
            id_menu: req.body.id_menu,
            id_kasir: req.body.id_kasir,
            harga: req.body.harga,
            nomor_meja: req.body.nomor_meja,
            qty: req.body.qty,
            status: req.body.status
        })
        console.log(req.body.status)
        console.log(req.body.id_kasir)

        return res.redirect('/pesanan');
    },

    edit: async (req, res) => {
        const menu = await Menu.findAll();
        const kasir = await Kasir.findAll();
        const pesanan = await Pesanan.findByPk(req.params.id);
        console.log(pesanan.dataValues)
        return res.render('pesanan/edit', { pesanan: pesanan.dataValues,menu, kasir});
    },

    update: async (req, res) => {
        const pesanan = await Pesanan.findByPk(req.params.id)
        // const pesanan = await Pesanan.findAll({            
        //     include:{
        //     model: Menu,
        //     where: {
        //         id_menu : req.params.id
        //     },
        //     where: {
        //         id_menu : req.params.id
        //     }
        // }}).then(result => {
        //     const dataPesanan = {...result[0]};
        //     console.log(dataPesanan.dataValues.Menus)
        // })

        await pesanan.update({
            id_menu: req.body.id_menu,
            id_kasir: req.body.id_kasir,
            harga: req.body.harga,
            nomor_meja: req.body.nomor_meja,
            qty: req.body.qty,
            status: req.body.status
        });
        return res.redirect('/pesanan');
    },

    destroy: async (req, res) => {
        const id = req.params.id;

        // this for delete field in database using id
        await Pesanan.destroy({
            where: {
                id_pesanan: id,
            },
        });

        return res.redirect('/pesanan');
    }
}