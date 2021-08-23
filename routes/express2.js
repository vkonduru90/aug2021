const fs = require('fs');
const fse = require('fs-extra');
const express = require('express');
const { validateJWT } = require('../utils/jwt');
const app = express();

    


app.use(express.json());

async function validateToken(req, res, next) {
   const token = req.headers.authorization;
   if (!token){
    return res.status(400).json({message: 'Token not found..'});
   }
   const result = await validateJWT(token);
   next();
}

app.use('/secure', validateToken);

app.use(express.static('./public'));

require('../dbs/mongo2');

app.use(require('.'));

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, ()=> console.log('server started on 3000'));

