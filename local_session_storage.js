//Adding Student in Local Storage
function addStudent(name, lname, age, email, cls) {
    var student = { name, lname, age, email, cls };
    for (i in student) {
        localStorage.setItem(i, student[i]);
    }
    console.log("Student added successfully!!")
}
addStudent('geetha', 'joseph', 20, 'geetha@gmail.com', 2);
//Getting Student from Local Storage
function getStudent(name) {
    if (localStorage.getItem('name') == name) {
        console.log("Got the student named " + name);
    }
}
getStudent('geetha');
//Removing student from local storage
function removeStudent(email) {
    if (localStorage.getItem('email') == email) {
        localStorage.removeItem('email');
        console.log('Removed the student mail id :' + email);
    }
}
removeStudent('geetha@gmail.com');
//Updating student values in local storage
function updateStudent(email) {
    localStorage.email = email;
    console.log("Email updated successfully!!")
}
updateStudent('geetha1@gmail.com');

