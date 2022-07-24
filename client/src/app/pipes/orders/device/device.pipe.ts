import { Pipe, PipeTransform } from '@angular/core';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';

@Pipe({
  name: 'device',
})
export class DevicePipe implements PipeTransform {
  transform(orders: FetchOrdersDto[], device: string): any {
    if (!orders || !device) {
      return orders;
    }
    return orders.filter((order) =>
      order.device.device.toLowerCase().includes(device.toLowerCase())
    );
  }
}
