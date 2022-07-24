import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NeedService {
  constructor(private _http: HttpClient) {}

  getNeeds() {
    return this._http.get<any>(`${environment.apiUrl}/api/needs/`);
  }

  receiveMaterials(id: number) {
    return this._http.patch<any>(`${environment.apiUrl}/api/needs/${id}`, null);
  }
}
