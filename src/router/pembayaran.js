const {
  findAllPembayaran,
  createPembayaran,
  findAllPembayaranbyId,
  findAllPembayaranpenggunaByid,
  findInfoPembayaranbyId,
  konfirmasiPembayaranPemilik,
  konfirmasiPembayaranPenghuni
} = require("../controller/controllerPembayaran");
const AuthMiddle = require("../middleware(wait)/VerifyToken.js");

const router = require("express").Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// Pembayaran
router.get("/all/:id", AuthMiddle, findAllPembayaranbyId); // Pemilik kost id spesifik melihat semua pembayaran
router.get("/:id", AuthMiddle, findInfoPembayaranbyId); // Pengguna kost melihat semua pembayaran
router.post("/", AuthMiddle, createPembayaran); // Pemilik kost membuat pembayaran
router.patch("/penghuni/:id", AuthMiddle, findAllPembayaranpenggunaByid); // Pengguna memperbarui info pembayaran
router.put("/:id", AuthMiddle, konfirmasiPembayaranPemilik); // Pemilik kost konfirmasi pembayaran
router.put("/konfirmasi/:id", AuthMiddle, konfirmasiPembayaranPenghuni); // Pemilik kost konfirmasi pembayaran
// router.post('/pembayaran', upload.single("profile_image"), createPembayaran)

module.exports = router;
