import { Component, Input } from '@angular/core';
import { Student } from '../../../interface/Student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
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
    className: new FormControl(''),
    phoneNumber: new FormControl('', Validators.pattern('0+[0-9](9)$')),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(250),
    ]),
  });
  onSubmit = async () => {
    // Take data from form data
    const studentData = this.studentForm.value;
    const { data } = await axios.post(
      'http://localhost:3000/students',
      studentData
    );
    console.log(data);
  };
}
