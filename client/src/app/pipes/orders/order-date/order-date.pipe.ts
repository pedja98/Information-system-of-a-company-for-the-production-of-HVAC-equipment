import { Pipe, PipeTransform } from '@angular/core';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';

@Pipe({
  name: 'orderDate',
})
export class OrderDatePipe implements PipeTransform {
  transform(orders: FetchOrdersDto[], date: any): any {
    const isStartDateValid = !isNaN(Date.parse(date.dateStart));
    const isEndDateValid = !isNaN(Date.parse(date.dateEnd));

    const startDate = new Date(date.dateStart);
    const endDate = new Date(date.dateEnd);

    if (!isStartDateValid && !isEndDateValid) {
      return orders;
    } else if (isStartDateValid && !isEndDateValid) {
      return orders.filter(
        (order) => new Date(order.createdAt).getTime() > startDate.getTime()
      );
    } else if (!isStartDateValid && isEndDateValid) {
      return orders.filter(
        (order) => new Date(order.createdAt).getTime() < endDate.getTime()
      );
    } else {
      if (startDate.getTime() < endDate.getTime()) {
        return orders.filter(
          (order) =>
            new Date(order.createdAt).getTime() < endDate.getTime() &&
            new Date(order.createdAt).getTime() > startDate.getTime()
        );
      } else {
        return [];
      }
    }
  }
}
