const express = require('express');
const app = express();
let   students = [];

app.use(express.json());

app.listen(3000, ()=> console.log('server started on 3000'));
app.get('/student', (req, res)=> {
    return res.status(200).json({students: students});
})
app.post('/student', (req, res)=> {
    const body = req.body;
    console.log(body, '***');
    body.id = students.length + 1;
    students.push(body);
    return res.status(200).json({students: students}); 
})
app.patch('/student/:id', (req, res)=> {
    const id = req.params.id;
    const body = req.body;
    const student = students.find(student => student.id == id);
    Object.keys(body).forEach(key=>{
        student[key] = body[key];
        console.log(body, '+++'); 
    });
    return res.status(200).json({student: student});    
})
app.delete('/student/:id', (req, res)=> {
    const id = req.params.id;
    const body = req.body;
    const student = students.find(student => student.id == id);
    Object.keys(body).forEach(key=>{
        if(student[key] == body[key])
        {students = students.filer(function (obj){
            return obj.id !== id;
        });}
        console.log(body, '+++'); 
    });
    return res.status(200).json({student: student});    
})