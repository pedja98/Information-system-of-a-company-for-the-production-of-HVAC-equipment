import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { CreateWorkOrderDialogComponent } from '../create-work-order-dialog/create-work-order-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.css']
})
export class WorkOrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(
    private _dialog: MatDialog,
    private _order: OrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._order.getWorkOrders().subscribe((res) => {
      if (res.err) {
        alert(res.err);
        return;
      }
      this.orders = res
    })
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.height = '595px'
    let dialogRef = this._dialog.open(CreateWorkOrderDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(res => {
      if (res.msg == 'updated') {
        this._order.getWorkOrders().subscribe((res) => {
          if (res.err) {
            alert(res.err);
            return;
          }
          this.orders = res
          const dialogConfig = new MatDialogConfig()
          dialogConfig.width = '320px'
          dialogConfig.height = '150px'
          dialogConfig.data = {
            msg: `Kreiran je novi radni nalog`
          }
          this._dialog.open(DialogMsgComponent, dialogConfig)
        })
      }
    })
  }

  orderDetails(i : number) {
    this._router.navigate(["/production-manager/order/" + this.orders[i].id])
  }  

}
