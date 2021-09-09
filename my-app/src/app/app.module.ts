import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { HeaderComponent } from './header/header.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { FooterComponent } from './footer/footer.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentGetComponent } from './student-get/student-get.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentInfoComponent } from './student-info/student-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeCountComponent,
    HeaderComponent,
    RightnavComponent,
    LeftnavComponent,
    FooterComponent,
    StudentCreateComponent,
    StudentGetComponent,
    StudentDetailsComponent,
    StudentSearchComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
