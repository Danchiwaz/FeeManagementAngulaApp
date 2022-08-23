import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentInfo } from '../interfaces/interface';
import { StudentService } from '../services/Student.service';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  allStudents: studentInfo[] = [];
  type: string = 'all';
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      this.loadStudent(this.type);
    });
    this.allStudents = this.studentService.getStudents();
    console.log('iniy');
  }

  loadStudent(type: string) {
    console.log(type);
    const students = this.studentService.getStudents();
    if (type === 'zero') {
      this.allStudents = students.filter((student) => student.feeBalance === 40000);
      console.log(this.allStudents);
    }else if (type === 'with') {
      this.allStudents = students.filter(
        (student) => student.feeBalance < 40000
      );
    } else {
      this.allStudents = students;
    }
  }
}
