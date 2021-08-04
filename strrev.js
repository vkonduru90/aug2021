var str = 'javascript';
var arr = str.split('');
//console.log(arr);
var revarr = [];
var count=0;

for(var index = arr.length-1;index>=0;index--)
{
  revarr[count]=arr[index];
  count++;
}

console.log(revarr);
console.log(revarr.join('')); 


