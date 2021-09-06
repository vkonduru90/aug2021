import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentGetComponent } from './student-get/student-get.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-get', component: StudentGetComponent},
  {path: 'student-search', component: StudentSearchComponent},
  {path: 'student-details', component: StudentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
