import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'create-edit-student',
    component: CreateEditStudentComponent,
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
