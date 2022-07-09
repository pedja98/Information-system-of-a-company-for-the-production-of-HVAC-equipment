import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NeedingDialogComponent } from '../needing-dialog/needing-dialog.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: any[] = [];

  constructor(
    private _material: MaterialService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._material.getMaterials().subscribe(res => {
      this.materials = res
    })
  }

  need(i: number): void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '530px'
    dialogConfig.height = '150px'
    dialogConfig.data = {
      id: this.materials[i].id,
      unit: this.materials[i].stock.unit,
      count: this.materials[i].stock.count,
      itemNumber: this.materials[i].itemNumber
    }
    let dialogRef = this._dialog.open(NeedingDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(res => {
      if (res.msg == 'updated') {
        this._material.getMaterials().subscribe(res => {
          this.materials = res
        })
      }
    })
  }

}
