import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(orders: any[], name: string): any {
    if (!orders || !name) {
      return orders
    }
    return orders.filter(order =>
      order.user.firstName.toLowerCase().includes(name.toLowerCase()) ||
      order.user.lastName.toLowerCase().includes(name.toLowerCase())
    )
  }

}
