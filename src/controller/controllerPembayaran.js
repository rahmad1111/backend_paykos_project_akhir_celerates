const { Pembayaran } = require('../models')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPA_KEY)

const findAllPembayaran = async (req, res) => {
    const data = await Pembayaran.findAll()
    try {
        res.json({
            status: 200,
            data: data
        })
    } catch (error) {
        res.json({
            status: 404,
            error: error.message
        })
    }
}

// const createPembayaran = async (req, res) => {
//     const {
//         id_penghuni,
//         id_data_kos,
//         harga,
//         jenis_pembayaran,
//         batas_waktu,
//         no_rekening,
//         periode_pembayaran,
//         jumlah_pembayaran,
//         tanggal_bayar,
//         status,
//     } = req.body;


//     // Insert data to Supabase
//     const file = req.file;
//     const fileNama = `public/${Date.now()}-${file.original}`

//     const { error } = await supabase.storage
//         .from("bukti_pembayaran")
//         .upload(fileNama, file.buffer, {
//             contentType: file.mimetype,
//             cacheControl: "3600",
//             upsert: false,
//     });

//     if (error) throw error;

//     const { publicUrl } = supabase.storage
//         .from("bukti_pembayaran")
//         .getPublicUrl(fileName);

//         profileImageUrl = publicUrl;

//     try {
//         const result = await Pembayaran.create({
//             id_penghuni,
//             id_data_kos,
//             harga,
//             jenis_pembayaran,
//             batas_waktu,
//             no_rekening,
//             periode_pembayaran,
//             jumlah_pembayaran,
//             tanggal_bayar,
//             bukti: profileImageUrl,
//             status,
//         });
//         res.status(201).json(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };




module.exports = {findAllPembayaran}