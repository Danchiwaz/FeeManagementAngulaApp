import { Routes } from '@angular/router';
import { AddStudentComponent } from '../add-student/add.student.component';
import { ErrorComponent } from '../error/error.component';
import { HeroSection } from '../heroSection/hero.section.component';
import { StudentLayoutComponent } from '../layouts/students-layout.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardGuard } from '../services/auth-guard.guard';
import { StudentComponent } from '../student/student.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'student',
    component: StudentLayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', component: StudentComponent },
      { path: 'new', component: AddStudentComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];
