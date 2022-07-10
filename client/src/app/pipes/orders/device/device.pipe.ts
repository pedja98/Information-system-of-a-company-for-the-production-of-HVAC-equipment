import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'device'
})
export class DevicePipe implements PipeTransform {

  transform(orders: any[], device: string): any {
    if (!orders || !device) {
      return orders
    }
    return orders.filter(order =>
      order.device.device.toLowerCase().includes(device.toLowerCase())
    )
  }

}
