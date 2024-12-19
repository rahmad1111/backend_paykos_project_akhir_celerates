const {Keluhan_kos} = require('../models')

const findAllKeluhanKos = async (req, res, next) => {
    const data = await Keluhan_kos.findAll()
    try {
        res.json({
            status: 200,
            data: data
        })
    } catch (error) {
        res.json({
            error,
            status: 500,
            message: 'Not Found'
        })
    }
}

const createKeluhanKos = async (req, res, next) => {
    const {judul_keluhan,isi_keluhan} = req.body
    const keluhan_kos = await Keluhan_kos.create({
        judul_keluhan,
        isi_keluhan,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json({
        status: 201,
        data: keluhan_kos
    })
}

const updatebyIdKeluhanKos = async (req, res) => {
    const {id} = req.params
    const {judul_keluhan,isi_keluhan} = req.body
    const keluhan_kos = await Keluhan_kos.findByPk(id)
    if (!keluhan_kos) {
        return res.status(404).json({
            message: 'Keluhan kos not found'
        })
    }
    await keluhan_kos.update({
        judul_keluhan,
        isi_keluhan,
        updatedAt: new Date(),
    })
    res.json({
        status: 200,
        data: keluhan_kos
    })
}

const deleteKeluhanKos = async (req, res) => {
    try {
        // Get params by id
        const { id } = req.params
        // Find user by id from params
        const keluhan = await Keluhan_kos.findByPk(id)
        if (!keluhan) {
            return res.status(404).json({
                status: 404,
                message: 'Data user not found'
            })
        }
        // Delete user
        await keluhan.destroy()
        // view the data
        res.json({
            status: 200,
            message: 'Data user deleted'
        })

    } catch (error) {
        console.log(error, '-----data user not deleted----')
    }
}

module.exports = {findAllKeluhanKos,updatebyIdKeluhanKos,createKeluhanKos, deleteKeluhanKos}