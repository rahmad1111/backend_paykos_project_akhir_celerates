const router = require("express").Router();

const users = require("./user");
const informasi = require("./informasi");
const keluhankos = require("./keluhankos");
const pembayaran = require("./pembayaran");
const auth = require("./auth");

router.use("/apikos/v1/users", users);
router.use("/apikos/v1/auth", auth);
router.use("/apikos/v1/informasi", informasi);
router.use("/apikos/v1/keluhankos", keluhankos);
router.use("/apikos/v1/pembayaran", pembayaran);

module.exports = router;
