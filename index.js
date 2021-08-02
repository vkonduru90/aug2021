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
}

function removeStudent(email) {
  // Logic to Remove From Session or Local Storage.
}

function updateStudent(email, updateValues) {
  // Logic to Update
}

// updateStudent('vkonduru90@gmail.com', { name: 'venkatesh', class: '9th' });
addStudent('KK', 20, 10, 'vkonduru90@gmail.com');
