import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { studentInfo, userDetails } from "../interfaces/interface";

@Injectable({
    providedIn: 'root',
})
export class StudentService{

   
    isLoggedIn: boolean = false;
    private students:studentInfo[] =[];

    userInfo:userDetails = {
        email:"maina@gmail.com",
        password:'1234'
    }

    constructor(private router:Router) {}

    getStudents(){
      return this.students;
    }

    addStudent(data:studentInfo){
       this.students.push(data) 
    }

    getUserDetails(){
        return this.userInfo;
    }

    loginUser(){
        this.isLoggedIn = true;
    }

    logoutUser(){
        this.isLoggedIn = false;
        this.router.navigate(['/'])

    }
   
   

}