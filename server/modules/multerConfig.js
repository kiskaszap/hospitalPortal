const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory = `uploads/${req.body.name}`;
    fs.mkdir(directory, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
        cb(err);
      } else {
        cb(null, directory);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
