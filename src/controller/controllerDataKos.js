const { where } = require('sequelize')
const {Data_kos} = require('../models')

const findAllData_Kos = async (req, res, next) => {
    const data_kos = await Data_kos.findAll({
        where:{
            id : req.params.id
        }
    })
    try {
        res.json({
            status: 200,
            data: data_kos
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "not found"
        })
    }
    next()
}

const updatebyIdData_kos = async (req, res, next) => {
    const {id} = req.params
    const {batas_pembayaran, jenis_pembayaran, no_rekening} = req.body
    const data_kos = await Data_kos.findByPk(id)
    if (!data_kos) {
        return res.status(404).json({
            message: 'Data kos not found'
        })
    }
    await data_kos.update({
        batas_pembayaran,
        jenis_pembayaran,
        no_rekening,
        updatedAt:new Date(),
    })
    res.json({
        status: 200,
        data: data_kos
    })

}

module.exports = {findAllData_Kos, updatebyIdData_kos}