const session = require('express-session');

const sessionMiddleware = () => {
  return session({
    secret: 'secret',
    name: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  });
};
module.exports = sessionMiddleware;
