import { Pipe, PipeTransform } from '@angular/core';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';

@Pipe({
  name: 'supplierItemNumber'
})
export class SupplierItemNumberPipe implements PipeTransform {

  transform(materials: FetchMaterialsDto[], supplierItemNumber: string): any {
    if (!materials || !supplierItemNumber) {
      return materials
    }
    return materials.filter(material => material.supplierItemNumber.toLowerCase().includes(supplierItemNumber.toLowerCase()))
  }

}
