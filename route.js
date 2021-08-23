const express=require('express');
const router=express.Router();
const students=require('./Students');
router.get('/', (req, res) => {
    students.forEach(() => {
     res.status(200).json({ students:students });
    })
});
//To get Single student by id
router.get('/:id', (req, res) => {
    res.json(students.filter(student => student.id ==(req.params.id)));          
});

//To add Student using postman
router.post('/', (req, res) => {
    const student = req.body;
    student.id = students.length + 1;
    students.push(student);
    return res.status(200).json({ students: students });
});
//To update studentname
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const student = students.find(student => student.id == id);
    Object.keys(body).forEach(key => {
        student[key] = body[key];
    });
    return res.status(200).json({ student: student });
});
//To delete student by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = students.indexOf(id);
    students.splice(index, 1);
    return res.status(200).json({ students })
});
module.exports=router;