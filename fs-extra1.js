const fse = require('fs-extra');

//check BKP1 Directory
function k1 (abc){
  fse.exists(abc,(err, result)=>{
    console.log(err, result);
    if(!err){
      console.log('No folder present with name bkp1....');
    }
 })
}

k1('./bkp1');

// create BKP Directory
function k2 (abc) {
  fse.ensureDir(abc,(err, result)=>{
    console.log(err, result);
})
}
k2('./bkp1');
//check file exists
function k3 (abc) {
  fse.exists(abc, (err, result)=>{
    if(!err){
      console.log('No file present with name README_bkp1.md...');
    }
  })
}
k3('./bkp1/README_bkp1.md');

// create file
function k4 (abc) {
  fse.ensureFile(abc, (err, result)=>{
    console.log(err, result);
  })
}
k4('./bkp1/README_bkp1.md');
//write to file
function k5 (abc) {
  let data = '***Hello! **** How are you?';
fse.writeFile(abc, data.toString(), (err, writeResult)=>{
  console.log(err, writeResult);  
})
}
k5('./bkp1/README_bkp1.md');
fse.ensureFile('./bkp1/India.txt', (err, result)=>{
  console.log(err, result);
})