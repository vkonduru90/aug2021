const { createReadStream } = require('fs');
const fse = require('fs-extra');
//Reading data from big text file
var india_read = fse.createReadStream('./India_document.txt')
// Set the encoding to be utf8. 
india_read.setEncoding('UTF8');
// Handle stream events --> data, end, and error
text = " "
india_read.on('data', function (chunk) {
   text += chunk;
});
india_read.on('end', function words() {
   console.log(text.split(" "));//reading file as array  
   console.log('Number of words in text file is :', text.length)});
india_read.on('end', function sp_word_count () {
   for(var i=0; i<=text.length; i++){
      if(text[i]=='india'){
      var count=0;
      count=count+1;
      console.log('nnnnn',count)
     }
   }
        
});

india_read.on('error', function (err) {
   console.log(err)
});

