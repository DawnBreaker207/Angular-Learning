import { Component, Input } from '@angular/core';
import { Student } from '../../../interface/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  @Input() students: Student[] = [];
}
