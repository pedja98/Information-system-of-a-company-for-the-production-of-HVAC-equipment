import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supplierItemNumber'
})
export class SupplierItemNumberPipe implements PipeTransform {

  transform(materials: any[], supplierItemNumber:string): any {
    if(!materials || !supplierItemNumber) {
      return materials
    }
    return materials.filter(material => material.supplierItemNumber.toLowerCase().includes(supplierItemNumber.toLowerCase()))
  }

}
