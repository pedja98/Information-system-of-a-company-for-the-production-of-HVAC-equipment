import { Pipe, PipeTransform } from '@angular/core';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';

@Pipe({
  name: 'needMaterialName'
})
export class NeedMaterialNamePipe implements PipeTransform {

  transform(needs: FetchNeedsDto[], name: string): any {
    if (!needs || !name) {
      return needs
    }
    return needs.filter(need => need.material.name.toLowerCase().includes(name.toLowerCase()))
  }
}
