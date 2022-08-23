import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { studentInfo } from "../interfaces/interface";
import { StudentService } from "../services/Student.service";

@Component({
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.css'],
})
export class AddStudentComponent {
  firstname: string = '';
  lastname: string = '';
  feeBalance: number = 0;
  addError:string = '';
  errorFormMessage:string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit() {
    
    
    if (this.firstname !== '' && this.lastname !== ''  && this.feeBalance !== 0 ) {
      if (this.feeBalance > 1 ){
         let student: studentInfo = {
           firstname: this.firstname,
           lastname: this.lastname,
           feeBalance: this.feeBalance,
         };
         this.studentService.addStudent(student);
         this.addError = 'Student Added successfully';
         setTimeout(() => {
           this.router.navigate(['/student']);
         }, 500);
      }
      else{
        this.addError = 'No negative Balacnce';
      }
       
      
    } else {
       this.addError = 'All fields are required';
    }

   
  }
}