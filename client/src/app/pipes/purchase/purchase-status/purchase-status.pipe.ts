import { Pipe, PipeTransform } from '@angular/core';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';

@Pipe({
  name: 'purchaseStatus',
})
export class PurchaseStatusPipe implements PipeTransform {
  transform(purchases: FetchPurchasesDto[], status: string): any {
    if (!purchases || !status) {
      return purchases;
    }
    return purchases.filter((purchase) =>
      purchase.status.toLowerCase().includes(status.toLowerCase())
    );
  }
}
