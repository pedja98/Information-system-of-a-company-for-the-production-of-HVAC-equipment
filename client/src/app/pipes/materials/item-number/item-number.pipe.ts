import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemNumber'
})
export class ItemNumberPipe implements PipeTransform {

  transform(materials: any[], itemNumber:string): any {
    if(!materials || !itemNumber) {
      return materials
    }
    return materials.filter(material => material.itemNumber.toLowerCase().includes(itemNumber.toLowerCase()))
  }

}
