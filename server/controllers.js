const upload = require('./modules/multerConfig');
const User = require('./userSchema');
const Image = require('./pictureSchema');

async function registeringUser(req, res) {
  const registeredUser = req.body;

  const { name, date, email, password, phone, mother, father, med } =
    registeredUser;

  const user = new User({
    name,
    email,
    password,
    date,
    phone,
    mother,
    father,
    med,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
async function loginCheck(req, res) {
  const loginDetails = req.body;

  try {
    const { email, password } = loginDetails.loginData;

    const user = await User.findOne({ email });

    if (user && user.email === email && user.password === password) {
      req.session.user = user;
      res.status(200).json({ isAuthenticated: true });
    } else {
      res.send('Failed');
    }
  } catch (error) {
    res.status(401).json('User not found');
  }
}
async function userDisplay(req, res) {
  const user = req.session.user;
  res.send(user);
}
async function pictureSave(req, res) {
  res.status(201).json({ message: 'Ok' });
}
async function getPicture(req, res) {
  const userData = req.body;
  console.log(userData, 'Mostani adat');

  if (Object.keys(userData).length === 0) {
    console.log('UserData is an empty object');
    return; // Do nothing if userData is an empty object
    // execute this block if condition1 is true
  } else if (Object.keys(userData).length !== 0) {
    const { email } = userData;
    const picture = await Image.findOne({ email });
    console.log(picture, '!!!!!!!!!!');
    res.status(200).json(picture);
    // execute this block if condition1 is false and condition2 is true
  } else {
    res.send('Error');
    console.log('Email isn`t defined');
    // execute this block if both condition1 and condition2 are false
  }
}
async function dashBoardSetUp(req, res) {
  try {
    const allUser = await User.find({});
    console.log(allUser);
    res.status(200).json(allUser);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  registeringUser,
  loginCheck,
  userDisplay,
  pictureSave,
  getPicture,
  dashBoardSetUp,
};
