import { Pipe, PipeTransform } from '@angular/core';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(orders: FetchOrdersDto[], status: string): any {
    if (!orders || !status) {
      return orders;
    }
    return orders.filter((order) => order?.device.status === status);
  }
}
