import { Pipe, PipeTransform } from '@angular/core';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(orders: FetchOrdersDto[], name: string): any {
    if (!orders || !name) {
      return orders;
    }
    return orders.filter((order) =>
      (
        order.user.firstName.toLowerCase() +
        ' ' +
        order.user.lastName.toLowerCase()
      ).includes(name.toLowerCase())
    );
  }
}
