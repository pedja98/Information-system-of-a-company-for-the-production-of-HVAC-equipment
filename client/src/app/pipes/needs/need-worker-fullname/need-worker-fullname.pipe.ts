import { Pipe, PipeTransform } from '@angular/core';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';

@Pipe({
  name: 'needWorkerFullname'
})
export class NeedWorkerFullnamePipe implements PipeTransform {

  transform(needs: FetchNeedsDto[], name: string): any {
    if (!needs || !name) {
      return needs
    }
    return needs.filter(need =>
      (need.worker?.firstName.toLowerCase() + ' ' + need.worker?.lastName.toLowerCase()).includes(name.toLowerCase())
    )
  }

}
