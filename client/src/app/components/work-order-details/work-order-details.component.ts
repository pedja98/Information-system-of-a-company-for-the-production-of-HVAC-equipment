import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.css']
})
export class WorkOrderDetailsComponent implements OnInit {

  order: any = null;

  constructor(
    private _route: ActivatedRoute,
    private _order: OrderService,
  ) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id') || '';

    this._order.getWorkOrder(id).subscribe(res => {
      this.order = res
    })
  }

}
