const fs = require('fs');
const fse = require('fs-extra');
const express = require('express');
//const { request } = require('http');
const router = express.Router();
//const { nextTick } = require('process');

let students = [];
var obj1 = {
    table: []
};

// app.use(express.json());

// app.use('/', require('./students.routes'));
// app.use('/', require('./users.routes'));

// app.listen(3000, () => console.log('server started on 3000'));
router.get('/', (req, res) => {
    return res.status(200).json({
        students: students,
        requestReceivedAt: request.locals.current
    });
})
router.post('/', (req, res) => {
    const body = req.body;
    console.log(body, '***');
    obj1.table.push(body);
    let data = JSON.stringify(obj1);
    fse.writeFile('./bkp/express.txt', data.toString(), (err, writeResult) => {
        console.log(err, writeResult);
        body.id = students.length + 1;
        students.push(body);
        return res.status(200).json({ students: students });
    })
    router.patch('/:id', (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const students = students.find(students => students.id == id);
        Object.keys(body).forEach(key => {
            students[key] = body[key];
            console.log(body, '+++');
        });
        return res.status(200).json({ student: student });
    })
    router.delete('/', (req, res) => {
        const id = req.query.id;
        const index = students.findIndex(students => students.id == (id));
        students.splice(index, 1);
        return res.status(200).json({ students });
    })
})

module.exports = router;
