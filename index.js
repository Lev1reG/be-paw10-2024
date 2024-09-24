const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const process = require('process');
const barangRoutes = require('./routes/barang.routes'); // Impor barang.routes
const userRoutes = require('./routes/user.routes'); // Impor user.routes
const userController = require('./controllers/user');  // Import user controller

const app = express();

// DOTENV CONFIG
dotenv.config();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

// CORS
app.use(cors());

// DB CONNECTION
if (!process.env.MONGODB_URI) {
  throw Error('Database connection string not found');
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database'); 
  })
  .catch((err) => {
    console.log('Failed to connect to the database');
    console.log(err);
  });

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello from PAW 10 Backend Service!');
});

// User authentication routes
app.post('/register', userController.register);
app.get('/login', userController.login);

// MIDDLEWARE ROUTES
app.use('/items', barangRoutes); // Gunakan barangRoutes
app.use('/users', userRoutes);   // Gunakan userRoutes


// APP START
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
