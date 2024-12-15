const { findAllInformasi, updatebyIdInformasi, createInformasi } = require('../controller/controllerInformasi');
const router = require('express').Router();
// Informasi
router.get('/', findAllInformasi)
router.post('/', createInformasi)
router.patch('/:id', updatebyIdInformasi)

module.exports = router;