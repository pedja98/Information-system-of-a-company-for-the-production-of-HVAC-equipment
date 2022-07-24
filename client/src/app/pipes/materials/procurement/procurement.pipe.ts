import { Pipe, PipeTransform } from '@angular/core';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';

@Pipe({
  name: 'procurement',
})
export class ProcurementPipe implements PipeTransform {
  transform(materials: FetchMaterialsDto[], isProcurementNeeded: boolean): any {
    if (!materials || !isProcurementNeeded) {
      return materials;
    }
    return materials.filter(
      (material) => material?.stock.count < material?.stock.capacity / 5
    );
  }
}
