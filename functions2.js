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
      return students;
  }
  function removeStudent(email1){
    let students = JSON.parse(sessionStorage.getItem('students'));
    email1 == students.email ? sessionStorage.removeItem('students') : console.log('wrong email');
    return students;
  }
  function updateStudent(email1, updateValues){
    let students = JSON.parse(sessionStorage.getItem('students'));
    email1 == students.email ? students.name == name1 : console.log('wrong email');
    email1 == students.email ? students.age  == age1 : console.log('wrong email');
    email1 == students.email ? students.class == class1 : console.log('wrong email');
    sessionStorage.setItem('students', JSON.stringify(students));
    return students;
  }