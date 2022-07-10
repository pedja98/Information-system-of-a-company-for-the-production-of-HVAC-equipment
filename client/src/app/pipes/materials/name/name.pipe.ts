import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(materials: any[], name:string): any {
    if(!materials || !name) {
      return materials
    }
    return materials.filter(material => material.name.toLowerCase().includes(name.toLowerCase()))
  }

}
