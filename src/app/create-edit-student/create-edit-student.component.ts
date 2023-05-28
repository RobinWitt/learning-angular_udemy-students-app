import { Component } from '@angular/core';
import { Student } from '../students/student';
import { nanoid } from 'nanoid';
import { Students } from '../students/mock-students';

@Component({
  selector: 'app-create-edit-student',
  templateUrl: './create-edit-student.component.html',
  styleUrls: ['./create-edit-student.component.css'],
})
export class CreateEditStudentComponent {
  student: Student = {
    id: nanoid(),
    firstName: '',
    lastName: '',
    mainClass: '',
    isActive: false,
  };

  create(): void {
    let studentById = Students.find(
      (student) => student.id === this.student.id
    );

    if (studentById === null || studentById === undefined) {
      Students.push(this.student);
    }
  }
}
