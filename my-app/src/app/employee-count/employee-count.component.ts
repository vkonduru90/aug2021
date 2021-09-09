import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from '../student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../todo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css'],
  providers: []
})
export class EmployeeCountComponent implements OnInit {
  [x: string]: any;
  student = {
    lname: '',
    nam : '',
    uname: '',
    password : '',
    rolnum : ''

  }
  constructor(public http: HttpClient, public route: ActivatedRoute) { }
  ngOnInit(): void {  }

  saveStudent(studentForm: any){ 
      console.log(studentForm.value);
      this.http.post('localhost:3000/secure/students', studentForm.value).subscribe(data=>console.log(data));
   }
  //  .subscribe(data=>console.log(data))
// @Input() count = 1;
// @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();
// @Output() onToDoGet: EventEmitter<any> = new EventEmitter<any>();

  // ngOnChanges(changes: SimpleChanges): void {
//     throw new Error('Method not implemented.');
//   }

//   students:Student[] = [{nam: 's1', rolnum: 10},{nam: 's2' , rolnum: 5}, {nam: 's3' , rolnum: 4}];

  
//   ngOnChages() {}

//   ngAfterContentChecked() {}
  
//   manageButtonClick(){
//     console.log("In manage click event ...");
//     this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data:any) =>{
//       console.log(data)
//       this.onToDoGet.emit(data);
//     },error => console.log(error))  
//   }

}
function post(arg0: string) {
  throw new Error('Function not implemented.');
}

