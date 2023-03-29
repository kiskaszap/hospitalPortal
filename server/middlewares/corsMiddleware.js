const cors = require('cors');

const corseMiddleware = () => {
  return cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
};
module.exports = corseMiddleware;
