const { where } = require('sequelize')
const { User } = require('../models')
const bcrypt = require('bcrypt')

const findAllUsers = async (req, res) => {
    // Get all users
    // const { id_pemilik } = Number(req.body.id_pemilik);
    // console.log('Datanya : ', id_pemilik)
    const data = await User.findAll({
        where: {
            id_pemilik: req.body.id_pemilik
        }
    })

    // Get all
    res.json({
        status: 200,
        datas: data
    })
}

const findAllPengguna = async (req, res) => {
    // Get all users
    const { id_pemilik } = Number(req.body);
    console.log('Datanya : ', id_pemilik)
    const data = await User.findAll({
        where: {
            id_pemilik: id_pemilik
        }
    })

    // Get all
    res.json({
        status: 200,
        datas: data
    })
}

const findUsersByid = async (req, res) => {
    try {
        // Get params by id
        const { id } = req.params

        // Find user by id from params
        const data = await User.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 404,
                message: 'Data user not found'
            })
        }

        // Get data id
        res.json({
            status: 200,
            data: data
        })
    } catch (error) {
        console.log(error, '-----data user not find----')
    }
}


const createUsers = async (req, res) => {
    const {
        harga_kamar,
        nama,
        no_telepon,
        roles,
        nomer_kamar,
        periode_pembayaran,
        nomer_pengguna,
        password,
        id_pemilik,
    } = req.body;

    console.log("Request Body:", req.body); 
    try {
        // Validasi input
        if (!harga_kamar || !nama || !no_telepon || !nomer_kamar || !periode_pembayaran || !nomer_pengguna || !password || !id_pemilik) {
            return res.status(400).json({ status: 400, message: 'Semua field harus diisi' });
        }

        // Periksa duplikasi `nomer_pengguna`
        const existingUser = await User.findOne({ where: { nomer_pengguna } });
        if (existingUser) {
            return res.status(409).json({ status: 409, message: 'Nomer pengguna sudah terdaftar' });
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            harga_kamar,
            nama,
            no_telepon,
            roles,
            nomer_kamar: Number(nomer_kamar),
            periode_pembayaran,
            nomer_pengguna,
            password: hashPassword,
            id_pemilik,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.status(201).json({
            status: 201,
            data: user,
        });
    } catch (error) {
        console.error('-----data user not created----', error);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        // Get params by id
        const { id } = req.params
        // Get updated data
        const updatedData = {
            harga_kamar,
            nama,
            no_telepon,
            roles,
            nomer_kamar,
            periode_pembayaran,
            nomer_pengguna,
            password,
        } = req.body
        // Find user by id from params
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'Data user not found'
            })
        }
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)
        // Update user
        await user.update({
            harga_kamar,
            nama,
            no_telepon,
            roles,
            nomer_kamar,
            periode_pembayaran,
            nomer_pengguna,
            password: hashPassword,
            updatedAt: new Date()
        })
        // view the data
        res.json({
            status: 200,
            data: updatedData
        })
    } catch (error) {
        console.log(error, '-----data user not updated----')
    }
}

const deleteUser = async (req, res) => {
    try {
        // Get params by id
        const { id } = req.params
        // Find user by id from params
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'Data user not found'
            })
        }
        // Delete user
        await user.destroy()
        // view the data
        res.json({
            status: 200,
            message: 'Data user deleted'
        })

    } catch (error) {
        console.log(error, '-----data user not deleted----')
    }
}

module.exports = {
    findAllPengguna,
    findAllUsers,
    findUsersByid,
    createUsers,
    updateUser,
    deleteUser
}