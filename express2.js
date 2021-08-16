const fs = require('fs');
const fse = require('fs-extra');
const express = require('express');
//const { nextTick } = require('process');
const app = express();


app.use(express.json());

app.use(express.static('./public'));

function myMiddleware(req, res, next){
    req.locals ={};
    req.locals.current = new Date();
    console.log('In Middleware...');
    return res.status(200).json({'message': 'from Middleware'});
    next();
}

app.use('/students', myMiddleware);

app.use(require('./routes'));

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, ()=> console.log('server started on 3000'));

