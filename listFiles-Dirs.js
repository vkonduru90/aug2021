const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
console.log('argv[2]', args);
let files  = [];
let directories = [];
function chkDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            directories.push(absolute+ ' ---- is Directory');
            return chkDirectory(absolute);
        }
        else return files.push(absolute + '---- is File ');
    });
}
let result = chkDirectory(args.toString());
console.log('************Directories*************');
console.log(directories);
console.log('**********Files**************');
console.log(files);