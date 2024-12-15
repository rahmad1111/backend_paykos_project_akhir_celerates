const { findAllKeluhanKos, createKeluhanKos, updatebyIdKeluhanKos } = require('../controller/controllerKeluhanKos');
const router = require('express').Router();
// Keluhan Kos
router.get('/', findAllKeluhanKos)
router.get('/', createKeluhanKos)
router.patch('/:id', updatebyIdKeluhanKos)

module.exports = router;