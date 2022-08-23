import { Component } from '@angular/core';
import { StudentService } from '../services/Student.service';

@Component({
  selector: 'hero-sec',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSection {
  constructor(public studentService: StudentService) {}
  // isAuthenticated = this.studentService.isLoggedIn;

  navBarStyle() {
    return {
      color: '#fff',
      display: 'flex',
      'flex-direction': 'row',
      justifyContent: 'space-between',
      'align-items': 'center',
      'background-color': '#002233',
      padding: '1rem 5rem',
      height: '5rem',
    };
  }
  navitems() {
    return {
      display: 'flex',
      gap: '2rem',
    };
  }
}
