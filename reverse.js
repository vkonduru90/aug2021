//Reversing the String
var my_str = 'JavaScript';
var rev_array=[];
console.log(my_str);
for (let i = my_str.length-1; i >= 0; i--) { 
    rev_array+= my_str[i];  
}
console.log(rev_array.split(''));
console.log(rev_array.toString());
