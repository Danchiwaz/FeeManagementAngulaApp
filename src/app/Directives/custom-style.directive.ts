import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.flexDirection = 'row';
    el.nativeElement.style.justifyContent = 'space-between';
    el.nativeElement.style.marginLeft = '5rem';
    el.nativeElement.style.paddingTop = '1rem';
    el.nativeElement.style.paddingBottom = '1rem';
    el.nativeElement.style.marginRight = '5rem';
    el.nativeElement.style.backgroundColor = 'transparent';
   }

}
