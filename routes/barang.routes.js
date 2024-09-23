const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barang.controller');

// GET /items - Melihat semua barang
router.get('/', barangController.getAllItems);

// GET /items/:id - Melihat barang berdasarkan ID
router.get('/:id', barangController.getItemById);

// POST /items/create - Menambahkan barang baru
router.post('/create', barangController.createItem);

// PUT /items/edit/:id - Mengedit barang berdasarkan ID
router.put('/edit/:id', barangController.updateItem);

// DELETE /items/delete/:id - Menghapus barang berdasarkan ID
router.delete('/delete/:id', barangController.deleteItem);

module.exports = router;
