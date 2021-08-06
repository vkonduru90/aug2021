var employees = [{ id: 1, name: 'Geetha' },
{ id: 2, name: 'maggi' },
{ id: 3, name: 'sam' },
{ id: 4, name: 'magdaline' },
{ id: 5, name: 'priya' }];
//even ids
var filtered = employees.filter(even_id);
//console.log(filtered);

filtered.forEach(element => {    
    console.log(element.id +' : '+ element.name);
});

function even_id(list) {
    return (list.id % 2 == 0);
}

//finding name

var found = employees.find(findMaggi); // return of find is not an array its an object
function findMaggi(list) {
    return list.name == 'maggi';
}
// return of find is not an array its an object So for each will fail
console.log(found.id + ' : ' + found.name);
