const {
  findAllPembayaran,
  createPembayaran,
  findAllPembayaranbyId,
  findAllPembayaranpenggunaByid,
  findInfoPembayaranbyId,
  konfirmasiPembayaranPemilik,
} = require("../controller/controllerPembayaran");

const router = require("express").Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// Pembayaran
router.get("/All/:id", findAllPembayaranbyId); // Pemilik kost id spesifik melihat semua pembayaran
router.get("/:id", findInfoPembayaranbyId); // Pengguna kost melihat semua pembayaran
router.post("/", createPembayaran); // Pemilik kost membuat pembayaran
router.patch("/penghuni/:id", findAllPembayaranpenggunaByid); // Pengguna memperbarui info pembayaran
router.put("/:id", konfirmasiPembayaranPemilik); // Pemilik kost konfirmasi pembayaran
// router.post('/pembayaran', upload.single("profile_image"), createPembayaran)

module.exports = router;
