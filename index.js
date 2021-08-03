function addStudent(name, age, cls, email) {
  // Logic to Save in Session or Local Storage.
  let students = sessionStorage.getItem('students');
  students = students ? students : '[]';
  students = JSON.parse(students);
  students.push({
    name,
    age,
    class: cls,
    email,
  });
  sessionStorage.setItem('students', JSON.stringify(students));
  return 'Student Added Successfully....';
}

function getStudent(email) {
  // Logic to Get From Session or Local Storage.
    let students = sessionStorage.getItem('students');

    // Parse the JSON
    let studentObj = JSON.parse(students);
    // Use Array find function to get the student by email - Assumption email will be unique in the array
    let studentByEmail = studentObj.find(function(item){return item.email == email});
    return studentByEmail;
}

function removeStudent(email) {
    // Logic to Remove From Session or Local Storage.
    let students = sessionStorage.getItem('students');

    // Parse the JSON
    let studentObj = JSON.parse(students);
    // Filter the array where email not equals the given email
    let studentFilter = studentObj.filter (function(item){return item.email != email});

    // set the filtered array back to the storage
    sessionStorage.setItem('students', JSON.stringify(studentFilter));
    return "Removed student from the storage " + email
}

function updateStudent(email, updateValues) {
  // Logic to Update
  let students = sessionStorage.getItem('students');

  // Parse the JSON
  let studentObj = JSON.parse(students);
// Use Array find function to get the student by email - Assumption email will be unique in the array
  let studentIndex = studentObj.findIndex(function(item){return item.email == email});

  // Update the array element with the given updated value 
  studentObj[studentIndex] = updateValues;


  // set the modified array back to the storage
  sessionStorage.setItem('students', JSON.stringify(studentObj));
}

// updateStudent('vkonduru90@gmail.com', { name: 'venkatesh', class: '9th' });
addStudent('KK', 20, 10, 'vkonduru90@gmail.com');
addStudent('s1', 21, 'Java', 's1@gmail.com');
addStudent('s2', 21, 'Java', 's2@gmail.com');

getStudent('s1@gmail.com');
removeStudent('s1@gmail.com');
updateStudent('s2@gmail.com', {name:'s2.1',age:22,class:'JavaScript',email:'s2.1@gmail.com'}) ;
getStudent('s2.1@gmail.com');
