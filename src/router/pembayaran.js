const { findAllPembayaran, createPembayaran, findAllPembayaranbyId, findAllPembayaranpenggunaByid } = require('../controller/controllerPembayaran');

const router = require('express').Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Pembayaran
router.get('/', findAllPembayaran)
router.get('/:id', findAllPembayaranbyId)
router.post('/', createPembayaran)
router.patch('/penghuni/:id', findAllPembayaranpenggunaByid)
// router.post('/pembayaran', upload.single("profile_image"), createPembayaran)


module.exports = router