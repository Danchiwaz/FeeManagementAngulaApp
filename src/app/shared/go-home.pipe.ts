import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goHome'
})
export class GoHomePipe implements PipeTransform {

  transform(value: number): any {
    if(value < 25000){
      return value + '*'
    }
    else{
      return value;
    }
  }

}
