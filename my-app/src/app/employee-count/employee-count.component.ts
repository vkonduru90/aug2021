import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from '../student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../todo';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit, OnChanges, AfterContentChecked {
@Input() count = 1;
@Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();
@Output() onToDoGet: EventEmitter<any> = new EventEmitter<any>();
constructor(public http: HttpClient) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  students:Student[] = [{nam: 's1', rolnum: 10},{nam: 's2' , rolnum: 5}, {nam: 's3' , rolnum: 4}];

  ngOnInit(): void {
  }
  ngOnChages() {}

  ngAfterContentChecked() {}
  
  manageButtonClick(){
    console.log("In manage click event ...");
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data:any) =>{
      console.log(data)
      this.onToDoGet.emit(data);
    },error => console.log(error))  
  }

}
