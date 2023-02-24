const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db');
const User = require('./userSchema');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use([bodyParser.urlencoded({ extended: false }), bodyParser.json()]);
app.use(
  cors({
    origin: true,
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    name: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
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
});
app.post('/login', (req, res) => {
  const login = req.body;
  User.findOne(
    { email: login.loginData.email, password: login.loginData.password },
    function (err, user) {
      if (err) throw err;
      if (user === null) {
        req.session.user = { message: 'User not authenticated' };
        res.send({ isAuthenticated: false });
      } else {
        const newUser = [user].map((item) => {
          const { name, date, email, phone, mother, father, med } = item;
          return { name, date, email, phone, mother, father, med };
        });

        req.session.user = newUser;
        res.send({ isAuthenticated: true });
      }
    }
  );

  // console.log(login);
});
app.get('/profile', (req, res) => {
  const user = req.session.user;
  res.send(user);
  // if (user) {
  //   console.log(user);
  //   res.send(user);
  // } else {
  //   res.send({ message: 'User not authenticated' });
  // }
  res.end();
});

app.listen(4000, () => {
  console.log('Express server listening on port 4000');
});
