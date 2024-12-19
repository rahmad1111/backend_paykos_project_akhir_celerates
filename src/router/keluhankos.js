const { findAllKeluhanKos, createKeluhanKos, updatebyIdKeluhanKos, deleteKeluhanKos } = require('../controller/controllerKeluhanKos');
const router = require('express').Router();
const AuthMiddle = require("../middleware(wait)/VerifyToken.js");
// Keluhan Kos
router.get('/', AuthMiddle, findAllKeluhanKos)
router.post('/', AuthMiddle, AuthMiddle, createKeluhanKos)
router.patch('/:id', AuthMiddle, updatebyIdKeluhanKos)
router.delete('/:id', AuthMiddle, deleteKeluhanKos)

module.exports = router;