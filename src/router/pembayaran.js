const { createPembayaran, findAllPembayaran } = require('../controller/controllerPembayaran');

const router = require('express').Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Pembayaran
router.get('/', findAllPembayaran)
// router.post('/pembayaran', upload.single("profile_image"), createPembayaran)


module.exports = router