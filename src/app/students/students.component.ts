import { Component } from '@angular/core';
import { Students } from './mock-students';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students = Students;

  deleteStudent(id: string): void {
    let newStudents = Students.filter((student) => student.id !== id);

    console.log('DELETE:', id);
    console.log('UPDATED STUDENTS:', newStudents);
  }
}
