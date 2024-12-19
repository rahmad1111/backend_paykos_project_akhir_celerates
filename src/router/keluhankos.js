const { findAllKeluhanKos, createKeluhanKos, updatebyIdKeluhanKos, deleteKeluhanKos } = require('../controller/controllerKeluhanKos');
const router = require('express').Router();
// Keluhan Kos
router.get('/', findAllKeluhanKos)
router.post('/', createKeluhanKos)
router.patch('/:id', updatebyIdKeluhanKos)
router.delete('/:id', deleteKeluhanKos)

module.exports = router;