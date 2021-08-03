function addStudent(name, age, cls, email) {          //add student to the session storage
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

function getstudent(email)    //getstudent
{
    let st = sessionStorage.getItem('students');
    st = JSON.parse(st);
    return st.filter(element=>email===(element.email));
}

function removestudent(email){                             //remove student
    let st = sessionStorage.getItem('students');
    st = JSON.parse(st);
    let index = st.findIndex(element=>email===(element.email));
     st.splice(index,1);
    sessionStorage.setItem('students',JSON.stringify(st));
}

function updatestudent(email,name,age,clas,eml)    //update student
{
    let st = sessionStorage.getItem('students');
    st = JSON.parse(st);
   let index = st.findIndex(element=>email===(element.email)); 
   st[index].name=name;
   st[index].age=age;
   console.log(st);
   st[index].email=eml;
}
