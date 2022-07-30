import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-create-purchase-dialog',
  templateUrl: './create-purchase-dialog.component.html',
  styleUrls: ['./create-purchase-dialog.component.css'],
})
export class CreatePurchaseDialogComponent implements OnInit {
  value: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog,
    private dialogRef: MatDialogRef<CreatePurchaseDialogComponent>,
    private _purchase: PurchaseService
  ) {}

  createPurchase(): void {
    if (this.value <= 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '320px';
      dialogConfig.height = '150px';
      dialogConfig.data = {
        msg: `Vrednost mora biti veca od 0`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfig);
      return;
    }
    if (this.value + this.data.count > this.data.capacity) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '320px';
      dialogConfig.height = '150px';
      dialogConfig.data = {
        msg: `Premašen je kapacitet magacina`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfig);
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '420px';
    dialogConfig.height = '170px';
    dialogConfig.data = {
      msg: `Da li zelite da poručite ${this.value} ${this.data.unit} artikla ${this.data.itemNumber}`,
    };
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res.data == 'confirm') {
        const data = {
          materialId: this.data.id,
          amount: this.value,
        };
        this._purchase.createPurchases(data).subscribe((res) => {
          if (res.success) {
            alert('YES');
          }
        });
      }
    });
  }

  ngOnInit(): void {}
}
