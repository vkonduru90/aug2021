
const fs = require('fs')

let obj = {};
let copy = [];
let unique = [];
let arr = [];
let index = 0;
let total = 0;
let count = 0;





const readstream = fs.createReadStream('./newdata.txt', 'utf-8')
const writestream = fs.createWriteStream('./result.txt')

readstream.on('open', () => {
    console.log("file is opening")
})

readstream.on('data', (chunk) => {
    copy.push(chunk);
    copy = copy.toString().split(" ");

    copy.forEach(element => {
        total++;
        for (let i = 0; i < copy.length; i++) {
            if (element === copy[i])
                count++;


        }

        console.log(element + "----" + count + " " + "times");
        let obj = { word: element, times: count };
        arr.push(obj);

        count = 0;


    })
    console.log("#####################################");
    console.log("total number of words are " + total);
    console.log("#####################################");
  //  console.log(arr);

    console.log("unique words are");
     arr.forEach(element=>{
         if(element.times===1)
          console.log(element.word);
     })   
    

})

readstream.on('close', () => {
    console.log("file closing");
})