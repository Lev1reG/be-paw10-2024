const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    kodeBarang: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
    },
    jumlahStok: {
        type: Number,
        required: true,
        default: 0,
    },
    harga: {
        type: Number,
        required: true,
    },
    pemasok: {
        type: String,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Barang', barangSchema);
