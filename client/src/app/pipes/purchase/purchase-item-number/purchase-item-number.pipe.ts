import { Pipe, PipeTransform } from '@angular/core';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';

@Pipe({
  name: 'purchaseItemNumber',
})
export class PurchaseItemNumberPipe implements PipeTransform {
  transform(purchases: FetchPurchasesDto[], itemNumber: string): any {
    if (!purchases || !itemNumber) {
      return purchases;
    }
    return purchases.filter((purchase) =>
      purchase.material.itemNumber
        .toLowerCase()
        .includes(itemNumber.toLowerCase())
    );
  }
}
