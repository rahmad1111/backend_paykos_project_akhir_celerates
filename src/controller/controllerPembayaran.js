const {
    where
} = require("sequelize");
const {
    Pembayaran
} = require("../models");
require("dotenv").config();

const findAllPembayaranbyId = async (req, res) => {
    const {
        id
    } = req.params;
    const data = await Pembayaran.findAll({
        where: {
            id_pemilik: id,
        },
    });
    if (!data) {
        return res.status(404).json({
            message: "Data pembayaran not found",
        });
    }
    res.json({
        status: 200,
        data: data,
    });
};

const findInfoPembayaranbyId = async (req, res) => {
    const {
        id
    } = req.params;
    const data = await Pembayaran.findAll({
        where: {
            id_penghuni: id,
        },
    });
    if (!data) {
        return res.status(404).json({
            message: "Data pembayaran not found",
        });
    }
    res.json({
        status: 200,
        data: data,
    });
};

const findAllPembayaranpenggunaByid = async (req, res) => {
    const {
        id
    } = req.params;
    const data = await Pembayaran.findAll({
        where: {
            id: id,
        },
    });
    if (!data) {
        return res.status(404).json({
            message: "Data pembayaran not found",
        });
    }
    res.json({
        status: 200,
        data: data,
    });
};

const updatePembayaranpengguna = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        jenis_pembayaran,
        bukti
    } = req.body;

    const pembayaran = await Pembayaran.findByPk(id);

    await pembayaran.update({
        jenis_pembayaran,
        bukti,
        tanggal_bayar: new Date(),
        status: "Belum Kofirmasi",
    });
};

const createPembayaran = async (req, res) => {
    const {
        id_penghuni,
        jenis_pembayaran,
        batas_waktu,
        no_rekening,
        tanggal_bayar,
        bukti,
        status,
        id_pemilik,
    } = req.body;

    try {
        const result = await Pembayaran.create({
            id_penghuni,
            jenis_pembayaran,
            batas_waktu,
            no_rekening,
            tanggal_bayar,
            bukti,
            status,
            id_pemilik,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json({
            message: "Berhasil di masukan",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

const konfirmasiPembayaranPemilik = async (req, res) => {
    const {
        id
    } = req.params; // Payment ID
    const {
        status
    } = req.body; // Status from the frontend

    try {
        const pembayaran = await Pembayaran.findByPk(id);

        if (!pembayaran) {
            return res.status(404).json({
                status: 404,
                message: "Pembayaran not found",
            });
        }

        // Update the payment status and payment date
        await pembayaran.update({
            status,
            tanggal_bayar: status === "Sudah Bayar" ? new Date() : null,
        });

        res.status(200).json({
            status: 200,
            message: "Pembayaran status updated successfully",
            data: pembayaran,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message,
        });
    }
};

module.exports = {
    findAllPembayaranbyId,
    findInfoPembayaranbyId,
    createPembayaran,
    updatePembayaranpengguna,
    findAllPembayaranpenggunaByid,
    konfirmasiPembayaranPemilik,
};