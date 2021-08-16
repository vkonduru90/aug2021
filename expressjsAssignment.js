const express = require('express');
const app = express();

app.use(express.json());

const students = [{name:'geetha',id:'1'},
{name:'geetha1',id:'2'},
{name:'geetha2',id:'3'}
];
//To get data from http request
app.get('/students', (req, res) => {
    students.forEach(() => {
        return res.status(200).json({ students: students });
    })
});
//To add data using postman
app.post('/students', (req, res) => {
    const student = req.body;
    student.id = students.length + 1;
    students.push(student);
    return res.status(200).json({students: students });
});
//To update student
app.patch('/students/:id',(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const student=students.find(student=>student.id==id);
    Object.keys(body).forEach(key=>{
        student[key]=body[key];
    });
    return res.status(200).json({student:student});
});
//To delete student
app.delete('/students/:id',(req,res)=>{
    const id=req.params.id;
    const index=students.indexOf(id);
    students.splice(index,1);
    return res.status(200).json({students})
});

app.listen(8084, function () {
    console.log('Server at Local host 8084');
})