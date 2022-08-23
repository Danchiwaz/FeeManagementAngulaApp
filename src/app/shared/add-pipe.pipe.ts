import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPipe'
})
export class AddPipePipe implements PipeTransform {

  transform(value: number,add: number=1): unknown {
    return value + add;
  }

}
