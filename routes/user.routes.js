const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Pastikan ini sudah benar

// Rute untuk login dan register
router.post('/register', userController.register);
router.get('/login', userController.login);

module.exports = router;
