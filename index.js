const express = require('express');
const app = express();

const { validateJWT } = require('./utils/jwt');

app.use(express.json());

async function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if(!token) {
    return res.status(400).json({ message: 'Token Not found..' });
  }
  const result = await validateJWT(token);
  next();
}
app.use('/secure', validateToken);

app.use(express.static('./public'));

app.use(require('./routes'));
require('./dbs/mongo_db');

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server Started on 3000 ...'));
