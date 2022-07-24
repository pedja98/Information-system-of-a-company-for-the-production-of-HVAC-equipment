import { Pipe, PipeTransform } from '@angular/core';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';

@Pipe({
  name: 'itemCount',
})
export class ItemCountPipe implements PipeTransform {
  transform(materials: FetchMaterialsDto[], itemCount: number): any {
    if (!materials || !itemCount) {
      return materials;
    }

    if (itemCount == 1) {
      return materials.filter(
        (material) => material.stock.count >= 0 && material.stock.count < 200
      );
    } else if (itemCount == 2) {
      return materials.filter(
        (material) => material.stock.count >= 200 && material.stock.count < 500
      );
    } else if (itemCount == 3) {
      return materials.filter(
        (material) => material.stock.count >= 500 && material.stock.count < 1000
      );
    } else if (itemCount == 4) {
      return materials.filter((material) => material.stock.count >= 1000);
    } else {
      return materials.filter((material) => material);
    }
  }
}
