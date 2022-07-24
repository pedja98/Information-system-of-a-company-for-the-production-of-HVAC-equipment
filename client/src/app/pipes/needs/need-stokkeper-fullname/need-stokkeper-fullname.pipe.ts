import { Pipe, PipeTransform } from '@angular/core';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';

@Pipe({
  name: 'needStokkeperFullname',
})
export class NeedStokkeperFullnamePipe implements PipeTransform {
  transform(needs: FetchNeedsDto[], name: string): any {
    if (!needs || !name) {
      return needs;
    }
    return needs.filter((need) =>
      (
        need.stockkeeper.firstName.toLowerCase() +
        ' ' +
        need.stockkeeper.lastName.toLowerCase()
      ).includes(name.toLowerCase())
    );
  }
}
