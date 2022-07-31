import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FetchPurchasesDto } from 'src/app/dto/fetchPurchasesDto';
import { UserDto } from 'src/app/dto/userDto';
import { itemCount, purchasesStatuses } from 'src/app/metadata/metadata';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css'],
})
export class PurchaseOrdersComponent implements OnInit {
  user = {} as UserDto;
  purchases: FetchPurchasesDto[] = [];
  itemNumber: string = '';
  supplierCode: string = '';
  cnt: number = 0;
  status: string = '';

  readonly itemCount = itemCount;
  readonly purchasesStatuses = purchasesStatuses;

  constructor(private _purchase: PurchaseService, private _dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this._purchase.getPurchases().subscribe((res) => {
      this.purchases = res;
    });
  }

  receivePurchase(i: number): void {
    this._purchase.receivePurchases(this.purchases[i].id).subscribe((res) => {
      if (res.success) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '320px';
        dialogConfig.height = '150px';
        dialogConfig.data = {
          msg: `Nalog za materijal ${this.purchases[i].material.itemNumber} je preuzet`,
        };
        this._dialog.open(DialogMsgComponent, dialogConfig);
        this._purchase.getPurchases().subscribe((res) => {
          this.purchases = res;
        });
      }
    });
  }
}
