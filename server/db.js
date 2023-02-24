const mongoose = require('mongoose');

const uri =
  'mongodb+srv://kiskaszap1:kaszap1992@cluster0.qtvgptc.mongodb.net/HospitalPortal?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

module.exports = connection;
