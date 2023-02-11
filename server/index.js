const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri =
  'mongodb+srv://kiskaszap1:kaszap1992@cluster0.qtvgptc.mongodb.net/HospitalPortal?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

const userSchema = new mongoose.Schema({
  name: String,
  date: String,
  email: String,
  password: String,
  phone: String,
  mother: String,
  father: String,
  med: String,
});

const User = mongoose.model('User', userSchema, 'users');

app.use([bodyParser.urlencoded({ extended: false }), bodyParser.json()]);
app.use(
  cors({
    origin: true,
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/registration', (req, res) => {
  const data = req.body;
  const user = new User({
    name: data.registeredUser.name,
    date: data.registeredUser.date,
    email: data.registeredUser.email,
    password: data.registeredUser.password,
    phone: data.registeredUser.phone,
    mother: data.registeredUser.mother,
    father: data.registeredUser.father,
    med: data.registeredUser.med,
  });

  user.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data saved successfully');
    }
  });
  console.log(data);
  res.send(data);
});
app.listen(4000, () => {
  console.log('Express server listening on port 4000');
});
