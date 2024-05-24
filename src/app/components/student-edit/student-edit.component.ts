import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css',
})
export class StudentEditComponent {
  router = inject(ActivatedRoute);
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
  async ngOnInit() {
    const studentId = this.router.snapshot.params['id'];
    const { data } = await axios.get(
      `http://localhost:3000/students/${studentId}`
    );
    this.studentForm.controls.name.setValue(data.name);
    this.studentForm.controls.age.setValue(data.age);
    this.studentForm.controls.address.setValue(data.address);
    this.studentForm.controls.className.setValue(data.className);
    this.studentForm.controls.phoneNumber.setValue(data.phoneNumber);
    this.studentForm.controls.email.setValue(data.email);
    console.log(data);
  }
  onSubmit = async () => {
    // Take data from form data
    const studentId = this.router.snapshot.params['id'];
    const { data } = await axios.put(
      `http://localhost:3000/students/${studentId}`,
      this.studentForm.value
    );
    console.log(data);

    alert(`Edit success`);
  };
}
