const { findAllData_Kos, updatebyIdData_kos } = require('../controller/controllerDataKos');
const router = require('express').Router();
// Data_kos
router.get('/:id', findAllData_Kos)
router.patch('/:id', updatebyIdData_kos)

module.exports = router;