import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { StudentService } from "../services/Student.service";

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usermail: string = '';
  userpass: string = '';
  errorlogin: string = ''

 
  @Output() authenticate = new EventEmitter<Boolean>();

  constructor(private studentservice: StudentService, private router: Router) {}

  authenticateUser() {
    const userDetails = this.studentservice.getUserDetails();
    if (
      this.usermail === userDetails.email &&
      this.userpass === userDetails.password
    ) {
      this.studentservice.loginUser()
      this.router.navigate(['/student']);
    }else{
        this.errorlogin = 'Invalid Credentials'
    }
  }
}