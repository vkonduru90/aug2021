const fs = require('fs');
const fse = require('fs-extra');
const express = require('express');
const app = express();
let students = [];
let table1 = [];

app.use(express.json());

app.listen(3000, () => console.log('server started on 3000'));
app.get('/student', (req, res) => {
    const body = req.body;
    console.log(body, 'get-get');
    table1.push(body);    
    let data = JSON.stringify(table1);
    fse.writeFile('./bkp/express.txt', data.toString(), (err, writeResult) => {
    console.log(err, writeResult);
    return res.status(200).json({ students: students });
    
})
app.post('/student', (req, res) => {
    const body = req.body;
    console.log(body, '***');
    //  obj1.table.push(body);
    body.id = students.length + 1;
    students.push(body);
    return res.status(200).json({ students: students });
})
app.patch('/student/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const student = students.find(student => student.id == id);
    Object.keys(body).forEach(key => {
        student[key] = body[key];
        console.log(body, '+++');
    });
    return res.status(200).json({ student: student });
})
app.delete('/student/:id', (req, res) => {
    const id = req.params.id;
    // const body = req.body;
    // Object.keys(body).forEach(key=>{
    //     if(id == body.id)
    //         {students = students.filter(function (obj){
    //         return obj.id !== id})
    //         }
    // });
    const studentIndex = students.findIndex(student => student.id == (id));
    students.splice(studentIndex, 1);
    return res.status(200).json({ students: students });
})
})