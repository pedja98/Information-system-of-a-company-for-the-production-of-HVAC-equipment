import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateWorkOrderDialogComponent } from '../create-work-order-dialog/create-work-order-dialog.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.css']
})
export class WorkOrdersComponent implements OnInit {

  constructor(private _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
      dialogConfig.width = '700px'
      dialogConfig.height = '595px'
      let dialogRef = this._dialog.open(CreateWorkOrderDialogComponent, dialogConfig)
  }

}
