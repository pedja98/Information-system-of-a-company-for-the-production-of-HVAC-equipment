import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material/material.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NeedingDialogComponent } from '../needing-dialog/needing-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';
import { itemCount, procurement } from 'src/app/metadata/metadata';
import { FetchMaterialsDto } from 'src/app/dto/fetchMaterialsDto';
import { UserDto } from 'src/app/dto/userDto';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddMaterialDialogComponent } from '../add-material-dialog/add-material-dialog.component';
import { CreatePurchaseDialogComponent } from '../create-purchase-dialog/create-purchase-dialog.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent implements OnInit {
  materials: FetchMaterialsDto[] = [];
  itemNumber: string = '';
  name: string = '';
  supplierCode: string = '';
  supplierItemNumber: string = '';
  cnt = 0;
  isProcurementNeeded = false;
  user = {} as UserDto;
  readonly itemCount = itemCount;
  readonly procurement = procurement;

  constructor(private _material: MaterialService, private _dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this._material.getMaterials().subscribe((res) => {
      this.materials = res;
    });
  }

  need(i: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '530px';
    dialogConfig.height = '150px';
    dialogConfig.data = {
      id: this.materials[i].id,
      unit: this.materials[i].unit,
      count: this.materials[i].stock.count,
      itemNumber: this.materials[i].itemNumber,
    };
    let dialogRef = this._dialog.open(NeedingDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if (res.msg == 'updated') {
        this._material.getMaterials().subscribe((materials) => {
          this.materials = materials;
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = '320px';
          dialogConfig.height = '150px';
          dialogConfig.data = {
            msg: `Stanje artikala ${this.materials[i].itemNumber} umanjeno je za ${res.value} ${this.materials[i].unit}`,
          };
          this._dialog.open(DialogMsgComponent, dialogConfig);
        });
      }
    });
  }

  orderMaterial(i: number): void {
    if (this.materials[i].stock.capacity === this.materials[i].stock.count) {
      const dialogConfigMsg = new MatDialogConfig();
      dialogConfigMsg.width = '320px';
      dialogConfigMsg.height = '150px';
      dialogConfigMsg.data = {
        msg: `Kapacitet za materijala ${this.materials[i].itemNumber} je popunjen`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfigMsg);
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '150px';
    dialogConfig.data = {
      id: this.materials[i].id,
      unit: this.materials[i].unit,
      count: this.materials[i].stock.count,
      capacity: this.materials[i].stock.capacity,
      itemNumber: this.materials[i].itemNumber,
    };
    let dialogRef = this._dialog.open(
      CreatePurchaseDialogComponent,
      dialogConfig
    );
  }

  deleteMaterial(i: number): void {
    if (this.materials[i].stock.count > 0) {
      const dialogConfigMsg = new MatDialogConfig();
      dialogConfigMsg.width = '320px';
      dialogConfigMsg.height = '150px';
      dialogConfigMsg.data = {
        msg: `Materijala ${this.materials[i].itemNumber} još uvek ima na stanju`,
      };
      this._dialog.open(DialogMsgComponent, dialogConfigMsg);
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '420px';
    dialogConfig.height = '200px';
    dialogConfig.data = {
      msg: `Da li sigurno želite da uklonite ${this.materials[i].itemNumber} iz baze`,
    };
    let dialogRef = this._dialog.open(ConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res.data == 'confirm') {
        this._material.deleteMaterial(this.materials[i].id).subscribe((res) => {
          if (res.success) {
            const dialogConfigMsg = new MatDialogConfig();
            dialogConfigMsg.width = '320px';
            dialogConfigMsg.height = '150px';
            dialogConfigMsg.data = {
              msg: `Materijala ${this.materials[i].itemNumber} je uklonjen`,
            };
            this._dialog.open(DialogMsgComponent, dialogConfigMsg);
            this._material.getMaterials().subscribe((res) => {
              this.materials = res;
            });
          } else {
            const dialogConfigMsg = new MatDialogConfig();
            dialogConfigMsg.width = '320px';
            dialogConfigMsg.height = '150px';
            dialogConfigMsg.data = {
              msg: `Materijala ${this.materials[i].itemNumber} nije preuzet sa trebovanja`,
            };
            this._dialog.open(DialogMsgComponent, dialogConfigMsg);
            return;
          }
        });
      }
    });
  }

  addMaterial(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height = '550px';
    let dialogRef = this._dialog.open(AddMaterialDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res.data == 'created') {
        const dialogConfigMsg = new MatDialogConfig();
        dialogConfigMsg.width = '320px';
        dialogConfigMsg.height = '150px';
        dialogConfigMsg.data = {
          msg: 'Dodat je novi materijal',
        };
        this._dialog.open(DialogMsgComponent, dialogConfigMsg);
        this._material.getMaterials().subscribe((res) => {
          this.materials = res;
        });
      }
    });
  }
}
