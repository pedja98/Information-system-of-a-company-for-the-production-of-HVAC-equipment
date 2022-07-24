import { Pipe, PipeTransform } from '@angular/core';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';

@Pipe({
  name: 'needItemNumber',
})
export class NeedItemNumberPipe implements PipeTransform {
  transform(needs: FetchNeedsDto[], itemNumber: string): any {
    if (!needs || !itemNumber) {
      return needs;
    }
    return needs.filter((need) =>
      need.material.itemNumber.toLowerCase().includes(itemNumber.toLowerCase())
    );
  }
}
