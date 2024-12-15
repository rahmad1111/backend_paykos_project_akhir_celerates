const {Informasi} = require('../models')

const findAllInformasi = async (req, res, next) => {
    const data = await Informasi.findAll()
    try {
        res.json({
            status: 200,
            data: data
        })
    } catch (error) {
        res.json({
            status: 404,
            message: 'Informasi not found'
        })
    }
}

const createInformasi = async (req, res) => {
    const {informasi} = req.body
    const newInformasi = await Informasi.create({
        informasi,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json({
        status: 201,
        data: newInformasi,
        message: 'Informasi created successfully'
    })

}

const updatebyIdInformasi = async (req, res) => {
    const {id} = req.params
    const {informasi} = req.body
    const data = await Informasi.findByPk(id)
    if (!data) {
        return res.status(404).json({
            message: 'Informasi not found'
        })
    }
    await data.update({
        informasi,
        updatedAt: new Date(),
    })
    res.json({
        status: 200,
        data: data,
        message: 'Informasi updated successfully'
    })
}

module.exports = {findAllInformasi,updatebyIdInformasi,createInformasi}