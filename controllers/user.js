const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Email received:", email);
      console.log('SECRET_KEY:', process.env.SECRET_KEY);
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send({ message: 'Invalid email or password' });
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).send({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.send({ token, userId: user._id, email: user.email, name: user.name });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).send(err);
    }
  };
  

  

  