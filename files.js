const express = require('express')
const fs = require('fs')
const fse = require('fs-extra')
const app = express()

app.use(express.json())



app.post('/studentfile', (req, res) => {
    const body = req.body;
    const str = JSON.stringify(body);

    fs.open('./datafile.txt', (error) => {
        if (error) {
            fse.ensureFile('./datafile.txt',(error, data) => { 
                if(!error) 
                 fs.writeFile('./datafile.txt', str, (error) => {if(error) console.log("error writing to file")})

            })
        }
        else {
            fs.writeFile('./datafile.txt', str, (error) => {
                if (!error)
                    console.log("success in writing to the file");
            })
        }
    })
    res.send(console.log("data stored in file"))
})

app.get('/studentfile', (req, res) => {
    fs.readFile('./datafile.txt', (error, data) => {
        if (error)
            console.log("error occured in reading  file");
        res.send(JSON.parse(data));
    })
})

app.patch('/studentfile/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    fs.readFile('./datafile.txt', (error, data) => {
        if (error)
            console.log("could not read the file");
        const obj = JSON.parse(data);
        Object.keys(obj).forEach(key => {
            obj[key] = body[key];
        })
        const str = JSON.stringify(obj)
        fs.writeFile('./datafile.txt', str, (error) => {
            if (error)
                console.log("error in writing the file");
        })

        res.send(JSON.parse(str));

    })
})

app.delete('/studentfile', (req, res) => {
    fs.writeFile('./datafile.txt',' ', (error, data) => {
        if (!error)
            console.log("success delete the file")


    })
})


app.listen(3000, () => { console.log("server started on 3000"); })