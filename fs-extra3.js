// const fse = require('fs-extra');
// const testFolder = './';
const fs = require('fs');
const testFolder = './bkp1/';
// fs.readdirSync(testFolder, {withFileTypes: true})
// .filter(item => !item.isDirectory())
// .map(item => item.name)
fs.readdirSync(testFolder).forEach(file => {
    fs.readdirSync(testFolder, {withFileTypes: true})
    .filter(file => !file.isDirectory())
    .map(file => file.name);
    console.log(file);
  });

// let dir = './bkp1/';
// function getFiles (dir, files_){
//     files_ = files_ || [];
//     var files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }
// console.log(getFiles('path/to/dir'))
// const fs = require('fs');
// var walk    = require('walk');
// var files   = [];

// // Walker options
// var walker  = walk.walk('./bkp1/', { followLinks: false });

// walker.on('file', function(root, stat, next) {
//     // Add this file to the list of files
//     files.push(root + '/' + stat.name);
//     next();
// });

// walker.on('end', function() {
//     console.log(files);
// });
// var files;


// fs.readdir(testFolder, (err, files) => {
//     console.log(files);
//   files.forEach(file => {
//     console.log(file);
//   });
// });


// console.log(process.argv);
// console.log(fs.readdir);