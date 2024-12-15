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

module.exports = {findAllKeluhanKos,updatebyIdKeluhanKos,createKeluhanKos}