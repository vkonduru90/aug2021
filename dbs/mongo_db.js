const mongoose = require('mongoose');

(function() {
  const mongooseConnection = mongoose.createConnection('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    useCreateIndex: true,
  });

  mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

  mongooseConnection.on('connected', () => {
    console.log('Mongo DB Connected ......');
  });
}());

// mongoDBConnection();
