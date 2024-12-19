const express = require("express");
const app = express();
const port = 3232;
const router = require("./router/routes");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// middleware yang di gunakan untuk melihat log request
morgan("combined");
// middleware yang di gunakan untuk parse JSON request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// import router dari folder router
app.use(router);

app.get("/", (req, res) => {
  res.send({
    message: "Selamat datang di API yang menggunakan Express.js",
    version: "1.0.0",
  });
});
// pesan awal saat menjalankan server

app.listen(port, () => {
  console.log(`Berjalan di http://localhost:${port}`);
});
