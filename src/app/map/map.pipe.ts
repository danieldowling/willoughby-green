import { Pipe, PipeTransform } from '@angular/core';

//pipe to transform sting to number format
@Pipe({
  name: 'numberPipe',
})
export class NumberPipe implements PipeTransform {
  transform(value: string) {
    return Number(value)
  }
}