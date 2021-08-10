const fs = require('fs');
const testFolder1 = './Testfolder1/';
const testFolder2 = './Testfolder2/';
const testFolder11 = './Testfolder11/';

fs.readdir(testFolder1, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });

fs.readdir(testFolder2, (err, files) => {
    files.forEach(file => {
      console.log(file);
      });
    });
fs.readdir(testFolder11, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
