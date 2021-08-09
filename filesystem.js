const fs = require('fs');

const lineByLine = require('n-readlines');

fs.readFile('./nodejs1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("File Content : "+data);
  var totalWords =data.toString();
  var totalLength =totalWords.length;
  console.log("Total Length : "+totalLength);

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
		// if word already exists. update its count;
			wordCount[line] = wordCount[line]+1;
		}
  }
  console.log(wordCount);
}
*/

