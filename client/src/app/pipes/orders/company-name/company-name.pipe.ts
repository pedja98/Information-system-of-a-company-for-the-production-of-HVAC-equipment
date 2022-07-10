import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyName'
})
export class CompanyNamePipe implements PipeTransform {

  transform(orders: any[], companyName:string): any {
    if(!orders || !companyName) {
      return orders
    }
    return orders.filter(order => order.companyName.toLowerCase().includes(companyName.toLowerCase()))
  }

}
