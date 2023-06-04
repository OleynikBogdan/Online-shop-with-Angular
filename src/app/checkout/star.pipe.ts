import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'TransformToStar' })
export class StarPipe implements PipeTransform {
  transform(Cvv: number) {
    return Cvv.toString().replace(/[0-9]/g, '*');
  }
}

