const Barang = require('../models/barang.model');

// GET all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Barang.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// GET item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Barang.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// POST create item
exports.createItem = async (req, res) => {
    const { nama, kodeBarang, deskripsi, jumlahStok, harga, pemasok } = req.body;
    const newItem = new Barang({ nama, kodeBarang, deskripsi, jumlahStok, harga, pemasok });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding item', error });
    }
};

// PUT update item
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Barang.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// DELETE item
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Barang.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};
