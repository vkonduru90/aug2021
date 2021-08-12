setImmediate((err,result)=>{
   if(!err) console.log('immediate',result);
});
setTimeout((err,result)=>{
    if(!err) console.log('timeout',result)
},2000);

const fs=require('fs');
fs.readFile(__filename,()=>{
    setTimeout(()=>{console.log('timeout');},0)});
setImmediate(()=>{console.log('immediate');});
