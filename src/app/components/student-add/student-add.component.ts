import { Component, Input } from '@angular/core';
import { Student } from '../../../interface/Student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  
  @Input() addStudent: any;
  name: string = '';
  age: number = 19;
  address: string = '';
  className: string = '';

  onAddStudent = () => {
    const data: Student = {
      name: this.name,
      age: this.age,
      address: this.address,
      className: this.className,
    };
    this.addStudent(data);
  };
}
