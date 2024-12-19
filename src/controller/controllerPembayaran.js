const { where } = require('sequelize')
const { Pembayaran } = require('../models')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPA_KEY)

const findAllPembayaran = async (req, res) => {
    const data = await Pembayaran.findAll()
    try {
        res.json({
            status: 200,
            data: data
        })
    } catch (error) {
        res.json({
            status: 404,
            error: error.message
        })
    }
}

const findAllPembayaranbyId = async (req, res) => {
    const { id } = req.params;
    const data = await Pembayaran.findAll({
        where: {
            id_penghuni: id
        }
    });
    if (!data) {
        return res.status(404).json({
            message: 'Data pembayaran not found'
        })
    }
    res.json({
        status: 200,
        data: data
    })
}

const findAllPembayaranpenggunaByid = async (req, res) => {
    const { id } = req.params;
    const data = await Pembayaran.findAll({
        where: {
            id: id
        },
    });
    if (!data) {
        return res.status(404).json({
            message: 'Data pembayaran not found'
        })
    }
    res.json({
        status: 200,
        data: data
    })
}

const updatePembayaranpengguna = async (req, res) => {
    const { id } = req.params;
    const {
        jenis_pembayaran,
    } = req.body;

    const pembayaran = await Pembayaran.findByPk(id);

    await pembayaran.update({
        jenis_pembayaran,
        tanggal_bayar : new Date(),
        status : "Belum Kofirmasi"
    })
}


const createPembayaran = async (req, res) => {
    const {
        id_penghuni,
        jenis_pembayaran,
        batas_waktu,
        no_rekening,
        tanggal_bayar,
        status,
    } = req.body;


    try {
        const result = await Pembayaran.create({
            id_penghuni,
            jenis_pembayaran,
            batas_waktu,
            no_rekening,
            tanggal_bayar,
            status,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json({
            message: "Berhasil di masukan",
            data: result,
        }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

//     const { publicUrl } = supabase.storage
//         .from("bukti_pembayaran")
//         .getPublicUrl(fileName);

//         profileImageUrl = publicUrl;

//     // Insert data to Supabase
//     const file = req.file;
//     const fileNama = `public/${Date.now()}-${file.original}`

//     const { error } = await supabase.storage
//         .from("bukti_pembayaran")
//         .upload(fileNama, file.buffer, {
//             contentType: file.mimetype,
//             cacheControl: "3600",
//             upsert: false,
//     });


module.exports = { findAllPembayaran, findAllPembayaranbyId, createPembayaran, updatePembayaranpengguna, findAllPembayaranpenggunaByid }