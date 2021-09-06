import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  india = 'https://static.toiimg.com/thumb/77480569/India-Flag.jpg?width=120&height=90';
  countryFlag = 'https://static.toiimg.com/thumb/77480569/India-Flag.jpg?width=240&height=180';
  usFlag = 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
  isdisabled = true;
  flag = this.usFlag;
  isRed = true;
  name = 'xyz';
  numbers = [10, 21, 43, 1,2,3,4,5];
  students:Student[] = [];

  rollNum(index: number, student: any): string{
    return student.rolnum;
  }

  classToApply = {
    'myclass': true,
    'mycolor': false,
    'myitalic':false
  };
  mymethod(){
    return 'From My Method';
  }
  getClasses() {
    const obj = {
      'myclass': true,
      'mycolor' : false,
      'myitalic' : false
    };
    if (this.isRed){
      obj.myclass = false;
    }
    return obj;
    
  }
  
  myEvent(){
    console.log('In my Event function...');
    alert('In my Event function...');
    // this.name = _k.target.value;
  }
  
  updateTitle(e: any) {
    this.title = e.target.value;
  }
  myMouseOver(e: any){
    console.log('In my mouser over ...')
    if (e.target.value == 'us'){
      this.flag = this.usFlag;
    }else if (e.target.value == 'india'){
      this.flag = this.india;   
    }
  }
  appCompFun(data: any){
    console.log(data, '=========');
    this.students = data;
  }
}
