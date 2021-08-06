// include file system module
var fse = require('fs-extra');

// read file function with call back function (file_name:sample.html)
fse.readFile('sample.html', (err, result) => {
  if (err)
    console.log('Error in Reading File', err);
  else
    console.log('Reading file Sucessfully', result.toString('utf8'))
});

// writeFile function that creates new file and write the content
fse.writeFile('newfile.js', 'Learn Node FS module', (err, data) => {
  if (err)
    console.log("Error in writing file", err);
  else
    console.log('File is created and writed successfully.', data);
});

// creating directory
const file = './bkp'
fse.ensureFile(file, (err) => {
  console.log("----", err) // => null
  if (err == null) { console.log('File folder created successfully'); }
});

//copying the file to bkp
fse.copy('newfile.js', 'bkp')
  .then(data => { console.log("file copied successfully", data) })
  .catch(err => { console.log("File can't be copied", err) })
//delete if exists(delete using unlink function in fs)
fse.writeFile('d.txt', 'needs to be deleted', (err, data) => {
  if (err)
    console.log("Error in creating file for deletion", err);
  else
    console.log('File is created to be deleted successfully.', data);
});
fse.exists('./d.txt', (err, result) => {
  if (err)
    console.log('The file to be deleted not exists', err);
  else
    console.log('the file d.txt should be deleted', result)
});
fse.unlink('./d.txt',(err,result)=>{
  if(err)console.log("error",err);
  else console.log('d.txt is deleted successfully',result);
});
