import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supplierCode'
})
export class SupplierCodePipe implements PipeTransform {

  transform(materials: any[], supplierCode:string): any {
    if(!materials || !supplierCode) {
      return materials
    }
    return materials.filter(material => material.supplierCode.toLowerCase().includes(supplierCode.toLowerCase()))
  }

}
