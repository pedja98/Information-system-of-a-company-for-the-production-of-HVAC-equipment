import { Pipe, PipeTransform } from '@angular/core';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(materials: FetchMaterialsDto[], name: string): any {
    if (!materials || !name) {
      return materials
    }
    return materials.filter(material => material.name.toLowerCase().includes(name.toLowerCase()))
  }

}
