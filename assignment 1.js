function addStudent(name, age, cls, email) {
    let students = sessionStorage.getItem('students');
    students = students ? JSON.parse(students) : [];
    let ss = students.findIndex(students => students['email'] == email);
    if(ss < 0){
        students.push({name, age, class: cls, email});
        sessionStorage.setItem('students', JSON.stringify(students))
        return "Student added successfully";
    } else {return "Entered email is registered"}
}

function getStudent(email) {
    let students = sessionStorage.getItem('students');
    students = JSON.parse(students);
    let ss = students.findIndex(students => students['email'] == email);
    if(ss >= 0){return students[ss]['name']} else {return "Entered email is not registered"}
}

function removeStudent(email) {
    let students = sessionStorage.getItem('students');
    students = JSON.parse(students);
    let ss = students.findIndex(students => students['email'] == email);
    if(ss >= 0){
        students.splice(ss,1);
        sessionStorage.setItem('students', JSON.stringify(students));
        return "Student removed successfully";
    } else {return "Entered email is not registered"}
}

function updateStudent(email, updateValues){
    let students = sessionStorage.getItem('students');
    students = JSON.parse(students);
    let ss = students.findIndex(students => students['email'] == email);
    if(ss >= 0){
        let nn = Object.keys(students[ss]); nn.pop();
        nn.forEach(x => students[ss][x] = updateValues[x]);
        sessionStorage.setItem('students', JSON.stringify(students));
        return "Student information updated successfully. Emails cannot be updated and New properties can not be added";
    } else {return "Entered email is not registered"};
}

addStudent('ff0', 20, 10, 'gg0@gmail.com');
getStudent('gg0@gmail.com');
removeStudent('gg0@gmail.com');
updateStudent('gg0@gmail.com', {name: 'fe', age: 10, class: 5, email: 'gg0@gmail'})
updateStudent('gg0@gmail.com', {email: 'gg0@gmail', class: 17, age: 20, name: 'ff0'})