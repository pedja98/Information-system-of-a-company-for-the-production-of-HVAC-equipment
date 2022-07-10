import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(orders: any[], status: string): any {
    if (!orders || !status) {
      return orders
    }
    return orders.filter(order =>
      order?.device.status === status
    )
  }

}
