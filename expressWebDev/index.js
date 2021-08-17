const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

const fs = require('fs');

const excelToJson = require('convert-excel-to-json');

const fileStorage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname+ '_'+ Date.now()+
        path.extname(file.originalname));
    },
});

const upload = multer({ storage: fileStorage });

let uploadFile = '';
app.post('/single', upload.single('uploadFile'), (req, res) => {
    console.log(req.file);
    if(res) {
        uploadFile= req.file.filename;
        let jsonFile = excelToJson({
            sourceFile: 'uploads/'+uploadFile   ,
            header: {
                rows: 1
            } ,
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        });    
        jsonFile ? res.status(200).send(jsonFile) : '';
        res.status(200).send("File uploaded and converted to json format is: ", jsonFile);   
    }
});

app.post('/student', (req, res) => {
    const body = req.body;
    console.log(body, '*******');
    let data = [];
    fs.readFile('./students.json',  'utf-8',(err,result) => {
        if (err) throw err
            else {
            console.log("result: ",result);
            data = JSON.parse(result);
            console.log('data: ',data, typeof(data));
            body.id = data.length+1;
            data.push(body);
            data= JSON.stringify(data);
            fs.writeFile('students.json', data, (err, result) => {
                if(!err) {
                    console.log(err, result, "Wrote students to file *********");
                    return res.send(data);
                }
                console.log(err, result, ' Error');
            });
        }
    });           
});

app.get('/student', (req, res) => { 
    console.log("Getting /student");     
    fs.readFile('./students.json',  'utf-8',(err,result) => {
        if (err) throw err
            else {
                result = JSON.parse(result);
                console.log("result: ",result);
                return res.send({result});
            }
    });       
}); 

app.patch('/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('id: ', id);
    const body = req.body;
    fs.readFile('./students.json',  'utf-8',(err,result) => {
        if (err) throw err
            else {
                result = JSON.parse(result);
                console.log("result: ",result);
                const studentIndex = result.findIndex(student => student.id === id);
                console.log('student: ', studentIndex);
                if (studentIndex) {
                    Object.keys(body).forEach(key => {
                        result[studentIndex][key] = body[key];
                    });
                    let data= JSON.stringify(result);
                    fs.writeFile('students.json', data, (err, result) => {
                        if(!err) {
                            console.log(err, result, "Wrote students to file *********");
                            return res.send(data);
                        }
                        console.log(err, result, ' Error');
                    });                
                } else return console.log('student record could not be updated');
            }
    });    
});

app.delete('/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('id: ', id);
    fs.readFile('./students.json',  'utf-8',(err,result) => {
        if (err) throw err
            else {
                result = JSON.parse(result);
                console.log("result: ",result);
                let data = JSON.stringify(result.filter(student => student.id !== id));               
                fs.writeFile('students.json', data, (err, result) => {
                    if(!err) {
                        console.log(err, result, "Deleted Student *********");
                        return res.send(data);
                    }
                    console.log(err, result, 'DElete Error');
                });                
            }
    });     
}); 

app.listen(3000, ()=> console.log('Server started on port 3000'));