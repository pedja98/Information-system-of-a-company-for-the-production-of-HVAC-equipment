import { Pipe, PipeTransform } from '@angular/core';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';

@Pipe({
  name: 'needStatus'
})
export class NeedStatusPipe implements PipeTransform {

  transform(needs: FetchNeedsDto[], status: string): any {
    if (!needs || !status) {
      return needs
    }
    return needs.filter(need =>
      need.status === status
    )
  }

}
