const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  email: String,
  user: String,
  name: String,
  imagePath: String,
});

const Image = mongoose.model('Image', pictureSchema, 'images');

module.exports = Image;
