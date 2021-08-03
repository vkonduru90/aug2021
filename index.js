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
    let students = JSON.parse(sessionStorage.getItem('students'));
    let student = students.find(student => student.email === email)
    return student;
}

function removeStudent(email) {
  // Logic to Remove From Session or Local Storage.
  let students = JSON.parse(sessionStorage.getItem('students'));
  let studentsFltd = students.filter(student => student.email !== email);

  sessionStorage.setItem('students',JSON.stringify(studentsFltd));
  return 'Student Removed Successfully....';
}

function updateStudent(email, updateValues) {
  // Logic to Update
  let students = JSON.parse(sessionStorage.getItem('students'));
  let index = students.findIndex(student => student.email === email);
  Object.keys(updateValues).forEach(key => students[index][key] = updateValues[key]);
  sessionStorage.setItem('students', JSON.stringify(students));
  return 'Student Updated Successfully....';
} 

addStudent('KK', 20, 10, 'vkonduru90@gmail.com');
addStudent('SS', 32, 'Java','ss@gmail.com');
let student = getStudent( 'vkonduru90@gmail.com');
console.log('Student Details: ', student);

updateStudent('vkonduru90@gmail.com', { name: 'venkatesh', class: '9th' });

removeStudent('ss@gmail.com');