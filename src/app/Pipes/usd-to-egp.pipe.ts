
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {
// func() :returnType{}
  transform(value: number,currRate:number=18): number {
    // return value*18;
    return value*currRate;
  }

}
