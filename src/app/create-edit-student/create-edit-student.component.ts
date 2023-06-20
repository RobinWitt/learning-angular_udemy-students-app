import { Component } from '@angular/core';
import { Student } from '../students/student';
import { Students } from '../students/mock-students';
import { nanoid } from 'nanoid';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-student',
  templateUrl: './create-edit-student.component.html',
  styleUrls: ['./create-edit-student.component.css'],
})
export class CreateEditStudentComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  student: Student = {
    id: nanoid(),
    firstName: '',
    lastName: '',
    mainClass: '',
    isActive: false,
  };

  ngOnInit(): void {
    if (this.router.url !== '/create-student') {
      const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

      const studentById = Students.find((student) => student.id === id)!;
      this.student = studentById;
    }
  }

  save(): void {
    let studentById = Students.find(
      (student) => student.id === this.student.id
    );

    if (studentById === null || studentById === undefined) {
      Students.push(this.student);
    } else {
      studentById = this.student;
    }
    this.router.navigate(['students']);
  }
}
