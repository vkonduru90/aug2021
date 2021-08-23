const express = require('express');
const app = express();
app.use(express.json());
app.use('/students',require('./route.js'))
app.listen(8084, function () {
    console.log('Server at Local host 8084');
});