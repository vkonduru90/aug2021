const fse = require('fs-extra');
//Reading data from big text file
var india_read = fse.createReadStream('./India_document.txt', 'utf-8');
//Reading data from big document
text = " "
india_read.on('data', function (chunk) {
   text += chunk;
   console.log(text);
   
});
// Handle stream events --> data, end, and error
india_read.on('end', function words() {
   var wordsArray =text.split(" ");
   console.log(wordsArray);//reading file as array  
   console.log('Number of words in text file is :', wordsArray.length);
});
india_read.on('end', function sp_word_count() {
   var count = 0; 
   var wordsArray =text.split(" ");
      for (var i = 0; i <= wordsArray.length; i++) {
      if (wordsArray[i] ==  'India') {
         count = count + 1;
            }
   }
   console.log('Number of times appeared:'+count);
   return count;
   
});
india_read.on('error', function (err) {
   console.log(err)
});

