const fs = require('fs');
const fse = require('fs-extra');
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students.controllers');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


router.get('/', async (req, res) => {
    const users = await studentController.getUsers();
    return res.status(200).json({students: users});
})
router.post('/', upload.single('file'), async (req, res) => {
    const body = req.body;
    if(!body.lname){
        return res.status(400).json({ message: 'lastName is required' });   
    }
    try{
        const result = await studentController.createUser(body);
        return res.status(200).json({students : result});
    } catch(e) {
        return res.status(400).json({Error : e});
    }
    
})
    
   
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;    
    const updatedUser = await studentController.updateUser(id, body);
    return res.status(200).json({ students: updatedUser });
})
router.delete('/', async (req, res) => {
    const id = req.query.id;    
    const deletedStudent = await studentController.deleteUser(id);
    return res.status(200).json({ deletedStudent });
})


    module.exports = router;
