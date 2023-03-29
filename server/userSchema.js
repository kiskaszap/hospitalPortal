const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  date: String,
  email: String,
  password: String,
  phone: String,
  mother: String,
  father: String,
  med: String,
  department: String,
  appointment: String,
  imagePath: String,
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
