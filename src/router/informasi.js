const { findAllInformasi, updatebyIdInformasi, createInformasi } = require('../controller/controllerInformasi');
const router = require('express').Router();
const AuthMiddle= require('../middleware(wait)/VerifyToken.js');
// Informasi
router.get('/', AuthMiddle, findAllInformasi)
router.post('/', AuthMiddle, createInformasi)
router.patch('/:id', AuthMiddle, updatebyIdInformasi)

module.exports = router;