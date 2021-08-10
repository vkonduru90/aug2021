const fse = require('fs-extra');
const fs = require('fs');
let myArrayString = [];
let m = 0;
let n = 0;
var x ;
var y ;
let Arr1 = [];
let myObj = {};

const readStream = fs.createReadStream('./bkp/India', 'utf-8');
const writeStream = fs.createWriteStream('./bkp1/India.txt');
readStream.on('open', ()=> {
  console.log('file opened ...');
})
readStream.on('data',(chunk)=>{
  myArrayString.push(chunk);
  myArrayString = myArrayString.toString().split(' ');
  myArrayString.forEach((element)=>{
    m++;
    for (let i = 0; i<myArrayString.length; i++){
      if(element === myArrayString[i])
      n++;
      }
  console.log(element +'--'+n+' number'+'of times');
  let myObj = {x: element, y: n};
  Arr1.push(myObj);
  n = 0;
  })
console.log('toal num of words =' +m);
console.log('unique words are');
Arr1.forEach((element)=>{
  if (element.y===1)
  console.log(element.x);
 })
 function compare (a,b){
   let c = 0;
   let y = Arr1[object.y];
   for (var i = 0; i < Arr1.length; i++)
   {if (y[i] > y[i+1]){
     c = 1;} else if
     (y[i] < y[i+1]){
     c = -1;}  
    return c; 
   }
  }
   Arr1.sort(compare);
   console.log(Arr1[0]+','+Arr1[1]+','+Arr1[2]);
 })

readStream.on('close', ()=> {
  console.log('In close event...');
})

// let data = [1, 'x', 'a', 'g', 'n', 0, 'none']; 
// fse.writeFile('./bkp1/India.md', data.toString(), (err, writeResult)=>{
//     console.log(err, writeResult);  
//   })
// let k1 = fse.readFile('./bkp1/India.md');
// var k2 = k1;
// console.log(k2);
// // let k2 = JSON.parse(k1, ',');
// // const a1 = k1;
// // const counts = {};
// // a1.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// // console.log(counts);
// // console.log(a1);