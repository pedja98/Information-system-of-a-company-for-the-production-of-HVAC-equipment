import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialService } from 'src/app/services/material.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-needing-dialog',
  templateUrl: './needing-dialog.component.html',
  styleUrls: ['./needing-dialog.component.css']
})
export class NeedingDialogComponent implements OnInit {

  value = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog,
    private _material: MaterialService,
    private dialogRef: MatDialogRef<NeedingDialogComponent>
  ) { }

  updateStock() {
    if (this.value <= 0 || this.value>this.data.count) {
      return;
    }
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '420px'
    dialogConfig.height = '170px'
    dialogConfig.data = {
      msg: `Da li zelite da artikal ${this.data.itemNumber} umanjite za ${this.value} ${this.data.unit}`
    }
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(res => {
      if (res.data == 'confirm') {
        this._material.updateMaterialStock(this.data.id, this.value ,(this.data.count - this.value)).subscribe(res => {
          this.dialogRef.close({ msg: 'updated' })
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
