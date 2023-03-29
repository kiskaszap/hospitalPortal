const express = require('express');
const app = express();
const connection = require('./db');
const cookieParser = require('cookie-parser');
const path = require('path');
const corseMiddleware = require('../server/middlewares/corsMiddleware');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const fs = require('fs');
const multer = require('multer');
const Image = require('./pictureSchema');

const controller = require('./controllers');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(corseMiddleware());
app.use(cookieParser());
app.use(sessionMiddleware());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory = `uploads/${req.body.name}`;
    fs.mkdirSync(directory, { recursive: true });
    const newImage = new Image({
      email: req.body.email,
      user: req.body.name,
      name: file.originalname,
      imagePath: directory,
    });

    newImage.save((err, user) => {
      if (err) {
        console.error(err);
      } else {
        console.log(user);
      }
    });

    cb(null, directory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post('/registration', controller.registeringUser);
app.post('/login', controller.loginCheck);
app.get('/profile', controller.userDisplay);
app.post(
  '/picture',
  bodyParser.json(), // use body-parser middleware first
  upload.single('avatar'),
  controller.pictureSave
);
app.post('/profile', controller.getPicture);
app.get('/dashboard', controller.dashBoardSetUp);
app.post('/card', async (req, res) => {});

app.listen(4000, () => {
  console.log('Express server listening on port 4000');
});
