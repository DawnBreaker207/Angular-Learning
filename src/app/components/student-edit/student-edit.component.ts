import { Component } from '@angular/core';
import { StudentService } from '../../student.service';
import { MessageService } from 'primeng/api';
import { Student } from '../../../interface/Student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css',
})
export class StudentEditComponent {
  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentService,
    private MessageService: MessageService
  ) {}
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
  studentId = this.route.snapshot.params['id'];
  ngOnInit() {
    this.StudentService.Get_Student_By_ID(this.studentId).subscribe((data) => {
      console.log(data);
      this.student = data;
      this.studentForm.controls.name.setValue(data.name);
      this.studentForm.controls.age.setValue(data.age);
      this.studentForm.controls.address.setValue(data.address);
      this.studentForm.controls.className.setValue(data.className);
    });
  }

  router = new Router();
  onSubmit = () => {
    // Take data from form data
    // const studentData = this.studentForm.value;
    // const { data } = await axios.post(
    //   'http://localhost:3000/students',
    //   studentData
    // );

    this.StudentService.Update_Student(
      this.studentId,
      this.studentForm.value as Student
    ).subscribe((data) => {
      console.log(data);
      alert('Success');
      this.router.navigate(['/dashboard/products']);
      this.MessageService.add({
        severity: 'error',
        summary: 'Success',
        detail: 'Add Success',
      });
    });
    // console.log(studentData);
  };
}
