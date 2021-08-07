const fse = require('fs-extra');

fse.readFile('README.md', 'utf-8', (err,data)=> {
  console.log(err, data);
  fse.exists('./bkp',(err, result)=>{
    console.log(err, result, '======')
      if(!err){
      console.log('No folder present with name bkp....');
      }
      fse.exists('./bkp/README_bkp.md', (err, result)=>{
        if(!err){
          console.log('No file present with name bkp...')
        }
      })
  })
})