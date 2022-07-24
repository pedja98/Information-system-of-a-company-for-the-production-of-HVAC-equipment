import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FetchOrdersDto } from 'src/app/dto/fetchOrdersDto';
import { orderStatuses, pipeDevices } from 'src/app/metadata/metadata';
import { OrderService } from 'src/app/services/order/order.service';
import { CreateWorkOrderDialogComponent } from '../create-work-order-dialog/create-work-order-dialog.component';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.css'],
})
export class WorkOrdersComponent implements OnInit {
  orders: FetchOrdersDto[] = [];
  type: string = '';
  companyName: string = '';
  readonly devices = pipeDevices;
  readonly orderStatuses = orderStatuses;
  fullname: string = '';
  device: string = '';
  status: string = '';
  dateStart: Date = new Date('');
  dateEnd: Date = new Date('');

  constructor(
    private _dialog: MatDialog,
    private _order: OrderService,
    private _router: Router
  ) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    this.type = user.type;
  }

  ngOnInit(): void {
    this._order.getWorkOrders().subscribe((res) => {
      if (res.err) {
        alert(res.err);
        return;
      }
      this.orders = res;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '480px';
    dialogConfig.height = '480px';
    let dialogRef = this._dialog.open(
      CreateWorkOrderDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((res) => {
      if (res.msg == 'updated') {
        this._order.getWorkOrders().subscribe((res) => {
          if (res.err) {
            alert(res.err);
            return;
          }
          this.orders = res;
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = '320px';
          dialogConfig.height = '150px';
          dialogConfig.data = {
            msg: `Kreiran je novi radni nalog`,
          };
          this._dialog.open(DialogMsgComponent, dialogConfig);
        });
      }
    });
  }

  orderDetails(i: number) {
    if (this.type === 'production-worker') {
      this._router.navigate(['/production-worker/order/' + this.orders[i].id]);
    } else if (this.type === 'production-manager') {
      this._router.navigate(['/production-manager/order/' + this.orders[i].id]);
    }
  }

  startOfProduction(i: number) {
    this._order
      .changeStatus(this.orders[i].id, 'START_OF_PRODUCTION')
      .subscribe((res) => {
        if (res.success) {
          this._order.getWorkOrders().subscribe((res) => {
            if (res.err) {
              alert(res.err);
              return;
            }
            this.orders = res;
          });
        }
      });
  }

  endOfProduction(i: number) {
    this._order
      .changeStatus(this.orders[i].id, 'END_OF_PRODUCTION')
      .subscribe((res) => {
        if (res.success) {
          this._order.getWorkOrders().subscribe((res) => {
            if (res.err) {
              alert(res.err);
              return;
            }
            this.orders = res;
          });
        }
      });
  }
}
