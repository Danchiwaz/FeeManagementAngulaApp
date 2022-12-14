import { Directive, ElementRef } from '@angular/core';
import { StudentService } from '../services/Student.service';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef, private studentService:StudentService) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.flexDirection = 'row';
    el.nativeElement.style.justifyContent = 'space-between';
    el.nativeElement.style.marginLeft = '5rem';
    el.nativeElement.style.paddingTop = '1rem';
    el.nativeElement.style.paddingBottom = '1rem';
    el.nativeElement.style.marginRight = '5rem';
    el.nativeElement.style.backgroundColor = studentService.changeBackgroundColor('transparent');
   }

}
