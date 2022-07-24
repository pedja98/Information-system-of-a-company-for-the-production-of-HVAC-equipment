import { Pipe, PipeTransform } from '@angular/core';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';

@Pipe({
  name: 'supplierCode',
})
export class SupplierCodePipe implements PipeTransform {
  transform(materials: FetchMaterialsDto[], supplierCode: string): any {
    if (!materials || !supplierCode) {
      return materials;
    }
    return materials.filter((material) =>
      material.supplierCode.toLowerCase().includes(supplierCode.toLowerCase())
    );
  }
}
