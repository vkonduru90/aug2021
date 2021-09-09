import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
