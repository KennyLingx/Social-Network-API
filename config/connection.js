const { connect, connection } = require('mongoose');



connect('mongodb://localhost/SocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
