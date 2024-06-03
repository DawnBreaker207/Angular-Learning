import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from '../../../interface/Student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  // constructor(private StudentService: StudentService) {}
  constructor(
    private route: ActivatedRoute,
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
  studentId = this.route.snapshot.params['id'];
  ngOnInit() {
    this.StudentService.Get_All_Students().subscribe((data) => {
      console.log(data);
      this.student = data;
    });
  }

  onSubmit = (productId: any) => {
    this.StudentService.Delete_Student(productId).subscribe((data) => {
      this.student = this.student.filter((product) => product.id !== productId);
      console.log(data);
    });
    // console.log(studentData);
  };
}
