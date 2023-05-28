import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, CreateEditStudentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
