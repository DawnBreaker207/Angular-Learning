import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../interface/Student';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentService,
    private MessageService: MessageService
  ) {}
  studentId = this.route.snapshot.params['id'];
  router = new Router();
  ngOnInit() {
    this.StudentService.Delete_Student(this.studentId).subscribe((data) => {
      alert('Success');
      this.router.navigate(['dashboard/products']);
    });
  }

  onSubmit = () => {
    // console.log(studentData);
  };
}
