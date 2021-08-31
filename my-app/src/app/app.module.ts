import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
