import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MaterialService } from 'src/app/services/material/material.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-needing-dialog',
  templateUrl: './needing-dialog.component.html',
  styleUrls: ['./needing-dialog.component.css'],
})
export class NeedingDialogComponent implements OnInit {
  value = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog,
    private _material: MaterialService,
    private dialogRef: MatDialogRef<NeedingDialogComponent>
  ) {}

  updateStock() {
    if (this.value < 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '320px';
      dialogConfig.height = '150px';
      dialogConfig.data = {
        msg: `Vrednost ne sme biti negativna`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfig);
      return;
    }
    if (this.value === 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '320px';
      dialogConfig.height = '150px';
      dialogConfig.data = {
        msg: `Vrednost ne sme biti nula`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfig);
      return;
    }
    if (this.value > this.data.count) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '320px';
      dialogConfig.height = '150px';
      dialogConfig.data = {
        msg: `Vrednost je veca od stanja u magacinu`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfig);
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '420px';
    dialogConfig.height = '170px';
    dialogConfig.data = {
      msg: `Da li zelite da artikal ${this.data.itemNumber} umanjite za ${this.value} ${this.data.unit}`,
    };
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if (res.data == 'confirm') {
        this._material
          .updateMaterialStock(
            this.data.id,
            this.value,
            this.data.count - this.value
          )
          .subscribe((res) => {
            this.dialogRef.close({ msg: 'updated', value: this.value });
          });
      }
    });
  }

  ngOnInit(): void {}
}
