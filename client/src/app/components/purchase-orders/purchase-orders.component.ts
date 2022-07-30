import { Component, OnInit } from '@angular/core';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';
import { UserDto } from 'src/app/dto/userDto';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css'],
})
export class PurchaseOrdersComponent implements OnInit {
  user = {} as UserDto;
  purchases: FetchPurchasesDto[] = [];

  constructor(private _purchase: PurchaseService) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this._purchase.getPurchases().subscribe((res) => {
      this.purchases = res;
    });
  }
}
