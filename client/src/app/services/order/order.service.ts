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
    return this._http.get<any>(`${environment.apiUrl}/api/orders/`)
  }

  getWorkOrder(id: string) {
    return this._http.get<any>(`${environment.apiUrl}/api/orders/${id}`)
  }

  changeStatus(id: number, status: string) {
    return this._http.put<any>(`${environment.apiUrl}/api/orders/${id}`, { status: status })
  }
}
