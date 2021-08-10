const { each } = require('async');
const fs = require('fs');

const lineByLine = require('n-readlines');

fs.readFile('./nodejs1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  //console.log("File Content : "+data);
  var totalWords =data.toString().split(' ');
  //console.log(''+totalWords);
  var totalLength =totalWords.length;
  var wordCount = {};
  //console.log("Total Length : "+totalLength);
  totalWords.forEach(word => {
    console.log(word);





    if (wordCount[word] == undefined) {
			wordCount[word] = 1;
		} else {
		
			wordCount[word] = wordCount[word]+1;
		}

  });

  console.log(wordCount);
  for (const words in wordCount) {
    console.log(words +' = ' + wordCount[words]);
  }
  /*
  
  var keys =wordCount.keys();
  console.log('Keys : '+keys);
  keys.forEach(key =>{
      console.log(key+' - '+wordCount[key]);
  })*/
});
/*
readFileToObject();

function readFileToObject() {
	var wordCount={};
	var liner = new lineByLine('./nodejs1.txt');
  while(line = liner.next()){
    if (wordCount[line] === undefined) {
			wordCount[line] = 1;
		} else {
	
			wordCount[line] = wordCount[line]+1;
		}
  }
  console.log(wordCount);
}
*/

