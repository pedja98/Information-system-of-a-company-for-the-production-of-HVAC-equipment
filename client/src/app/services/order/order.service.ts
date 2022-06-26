import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  createOrder(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/api/orders/`, data)
  }

  getWorkOrders() {
    return this._http.get<any>(`${environment.apiUrl}/api/orders/work-order`)
  }

  getWorkOrder(id: string) {
    return this._http.get<any>(`${environment.apiUrl}/api/orders/work-order/${id}`)
  }
}
