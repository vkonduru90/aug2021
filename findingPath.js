const fs = require('fs');
const testFolder1 = './Testfolder1/';
const testFolder2 = './Testfolder2/';
const testFolder11 = './Testfolder1/Testfolder11/';
const testFolder12 = './Testfolder1/Testfolder12/';
const testFolder13 = './Testfolder1/Testfolder13/';
const testFolder21 = './Testfolder2/Testfolder21/';
const testFolder22 = './Testfolder2/Testfolder22/';
const testFolder23 = './Testfolder2/Testfolder23/';
/*fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });*/
fs.readdir(testFolder1, (err, files) => {
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
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder11);
  }
});
fs.readdir(testFolder12, (err, files) => {
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder12);
  }
});
fs.readdir(testFolder13, (err, files) => {
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder13);
  }
});
fs.readdir(testFolder21, (err, files) => {
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder21);
  }
});
fs.readdir(testFolder22, (err, files) => {
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder22);
  }
});
fs.readdir(testFolder23, (err, files) => {
  if (files.length > 0) {
    files.forEach(file => {
      console.log(file);
    });
  }
  else {
    console.log('No files in this directory', testFolder23);
  }
});





