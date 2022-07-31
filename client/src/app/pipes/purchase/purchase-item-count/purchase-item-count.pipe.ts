import { Pipe, PipeTransform } from '@angular/core';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';

@Pipe({
  name: 'purchaseItemCount',
})
export class PurchaseItemCountPipe implements PipeTransform {
  transform(purchases: FetchPurchasesDto[], itemCount: number): any {
    if (!purchases || !itemCount) {
      return purchases;
    }

    if (itemCount == 1) {
      return purchases.filter(
        (purchase) => purchase.amount >= 0 && purchase.amount < 200
      );
    } else if (itemCount == 2) {
      return purchases.filter(
        (purchase) => purchase.amount >= 200 && purchase.amount < 500
      );
    } else if (itemCount == 3) {
      return purchases.filter(
        (purchase) => purchase.amount >= 500 && purchase.amount < 1000
      );
    } else if (itemCount == 4) {
      return purchases.filter((purchase) => purchase.amount >= 1000);
    } else {
      return purchases.filter((purchase) => purchase);
    }
  }
}
