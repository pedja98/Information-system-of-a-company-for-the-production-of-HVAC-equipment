import { Pipe, PipeTransform } from '@angular/core';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';

@Pipe({
  name: 'companyName',
})
export class CompanyNamePipe implements PipeTransform {
  transform(orders: FetchOrdersDto[], companyName: string): any {
    if (!orders || !companyName) {
      return orders;
    }
    return orders.filter((order) =>
      order.companyName.toLowerCase().includes(companyName.toLowerCase())
    );
  }
}
