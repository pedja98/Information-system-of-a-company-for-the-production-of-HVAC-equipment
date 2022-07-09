import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NeedingDialogComponent } from '../needing-dialog/needing-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: any[] = [];
  materialsDisplad: any[] = [];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _material: MaterialService,
    private _dialog: MatDialog,
  ) { 
    this.form = this.formBuilder.group({
      'itemNumber': [''],
      'name': [''],
      'supplierCode': [''],
      'supplierItemNumber': [''],
    })
  }

  ngOnInit(): void {
    this._material.getMaterials().subscribe(res => {
      this.materials = res
      this.materialsDisplad = this.materials
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
        this._material.getMaterials().subscribe(materials => {
          this.materials = materials
          this.materialsDisplad = this.materials
          const dialogConfig = new MatDialogConfig()
          dialogConfig.width = '320px'
          dialogConfig.height = '150px'
          dialogConfig.data = {
            msg: `Stanje artikala ${this.materials[i].itemNumber} umanjeno je za ${res.value}`
          }
          this._dialog.open(DialogMsgComponent, dialogConfig)
        })
      }
    })
  }

  searchByItemNumber() {
    
  }
}
