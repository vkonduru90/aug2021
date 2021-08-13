const express = require('express');
const app = express();

app.use(express.json())
const students = [];
app.post('/student', (req, res) => {
    const body = req.body;
    console.log(body);
    body.id = students.length + 1;
    students.push(body);
    return res.status(200).json({ students: students });

});

app.get('/student', (req, res) => {
    res.status(200).json({ students: students });
});

app.patch('/student/:id', (req, res) => {
    const id = req.params.id;
    
    const body = req.body;
    const student = students.find(student =>  student.id == id )
    Object.keys(body).forEach(key => {
        student[key] = body[key];
    });
        return res.status(200).json({students:student})
    
});
app.delete('/student/:id', (req,res)=>{
    const id = req.params.id;
    
    let index = students.findIndex(student=>student.id == id);

    console.log(index);
    
   students.splice(index,1);

    return res.status(200).json({students: students}) 
    
});
app.listen(3000, () => console.log('Server Started on 3000 ...'));
