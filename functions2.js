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
  function removeStudent(email){
    let students = JSON.parse(sessionStorage.getItem('students'));
    let index = students.findIndex((element)=>email===element.email);
    students.splice(index,1);
    sessionStorage.setItem('students', JSON.stringify(students));
  }
  
  function updateStudent(email, {name1,age,cls}){    
    let students = JSON.parse(sessionStorage.getItem('students'));
    let index = students.findIndex((element)=>email===element.email);
    console.log(students[index].name);    
    students[index].name = name1;
    students[index].age = age;
    students[index].class = cls;
    sessionStorage.setItem('students', JSON.stringify(students));
    return students;
  }