import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(private _http: HttpClient) {}

  getPurchases() {
    return this._http.get<any>(`${environment.apiUrl}/api/purchases/`);
  }

  createPurchases(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/api/purchases/`, data);
  }

  receivePurchases(id: number) {
    return this._http.put<any>(
      `${environment.apiUrl}/api/purchases/${id}`,
      null
    );
  }
}
