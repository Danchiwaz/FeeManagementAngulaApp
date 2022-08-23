import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add.student.component';

import { AppComponent } from './app.component';
import { HeroSection } from './heroSection/hero.section.component';
import { StudentLayoutComponent } from './layouts/students-layout.component';
import { LoginComponent } from './login/login.component';
import { routes } from './Routes/routes';
import { StudentService } from './services/Student.service';
import { StudentComponent } from './student/student.component';
import { AddPipePipe } from './shared/add-pipe.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { ErrorComponent } from './error/error.component';
import { GoHomePipe } from './shared/go-home.pipe';
import { CustomStyleDirective } from './Directives/custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroSection,
    LoginComponent,
    StudentComponent,
    AddStudentComponent,
    StudentLayoutComponent,
    ErrorComponent,
    AddPipePipe,
    CapitalizePipe,
    GoHomePipe,
    CustomStyleDirective,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
