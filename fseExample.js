const fse = require('fs-extra');

fse.readFile('README.md', 'utf-8',  (err, data) => {
    fse.exists('./README.md', (err, result) => {
        console.log(err, result, '*********README.md Exists result');
    })
    console.log(err,data);
    if(!err) {
    fse.exists('./bkp', (err, result) => {
        console.log(err, result, '******');
        if(!err) {
            console.log('No folder named bkp exists...');
            fse.ensureDir('./bkp', (err, result) => {
                console.log(err, result, 'ensureDir******');
            })
        }
         fse.exists('./bkp/README_bkp.md', (err, result) => {
            if(!err) {
                fse.ensureFile('./bkp/README_bkp.md', (err, result) => {
                    console.log(err, result, 'ensureFile*******');
                    fse.writeFile('./bkp/README_bkp.md', data.toString(), (err, result) => {
                        if(!err) {
                            fse.remove('./README.md', (err, result) => {
                                console.log(err, result, "Remove Original File Copy *********");
                            })
                        }
                        console.log(err, result, 'Write Result********');
                    });
                })
                console.log(err, result, 'No file named README_bkp.md exists');
            }          
        });
    });
    }
});