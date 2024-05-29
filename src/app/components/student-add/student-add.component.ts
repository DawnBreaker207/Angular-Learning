import { Component, Input } from '@angular/core';
import { Student } from '../../../interface/Student';
import { StudentService } from '../../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  constructor(
    private StudentService: StudentService,
    private MessageService: MessageService
  ) {}
  @Input() students: Student[] = [];
  studentForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
      Validators.pattern('[a-zA-Z]+'),
    ]),
    age: new FormControl(0, [
      Validators.min(0),
      Validators.max(120),
      Validators.pattern('[0-9]+'),
    ]),
    address: new FormControl(''),
    className: new FormControl('', Validators.required),
    // phoneNumber: new FormControl('', Validators.pattern('0+[0-9](9)$')),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(250),
    ]),
  });
  student: Student[] = [];
  ngOnInit() {
    this.StudentService.Get_All_Students().subscribe((data) => {
      console.log(data);
      this.student = data;
    });
  }
  route = new Router();
  onSubmit = () => {
    this.StudentService.Add_Student(
      this.studentForm.value as Student
    ).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/dashboard/products']);
      this.student.push(data as Student);
      this.MessageService.add({
        severity: 'error',
        summary: 'Success',
        detail: 'Add Success',
      });
    });
    // console.log(studentData);
  };
}
