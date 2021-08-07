const fse = require('fs-extra');

//check BKP Directory
fse.exists('./bkp',(err, result)=>{
    console.log(err, result)
    if(!err){
        console.log('No folder present with name bkp....');
        }
})
// create BKP Directory
fse.ensureDir('./bkp',(err, result)=>{
    console.log(err, result);
})
//check file exists
fse.exists('./bkp/README_bkp.md', (err, result)=>{
    if(!err){
      console.log('No file present with name README_bkp.md...');
    }
  })
  // create file
  fse.ensureFile('./bkp/README_bkp.md', (err, result)=>{
    console.log(err, result);
  })
  //write to file
  let data = 'Hello! How are you?'
  fse.writeFile('./bkp/README_bkp.md', data.toString(), (err, writeResult)=>{
    console.log(err, writeResult);  
  })