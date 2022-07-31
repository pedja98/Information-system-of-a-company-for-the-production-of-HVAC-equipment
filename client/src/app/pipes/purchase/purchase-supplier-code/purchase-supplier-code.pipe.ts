import { Pipe, PipeTransform } from '@angular/core';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';

@Pipe({
  name: 'purchaseSupplierCode',
})
export class PurchaseSupplierCodePipe implements PipeTransform {
  transform(purchases: FetchPurchasesDto[], supplierCode: string): any {
    if (!purchases || !supplierCode) {
      return purchases;
    }
    return purchases.filter((purchase) =>
      purchase.material.supplierCode
        .toLowerCase()
        .includes(supplierCode.toLowerCase())
    );
  }
}
