import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private _http: HttpClient) { }

  getMaterials() {
    return this._http.get<any>(`${environment.apiUrl}/api/materials/`)
  }

  updateMaterialStock(id: number, value: number, count: number) {
    return this._http.put<any>(`${environment.apiUrl}/api/materials/${id}`, {value, count})
  }
}
