import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  login(user: any) {
    return this._http.post<any>(`${environment.apiUrl}/api/users/login`, user)
  }

  logout() {
    return this._http.post<any>(`${environment.apiUrl}/api/users/logout`, null)
  }

  getUser() {
    return this._http.get<any>(`${environment.apiUrl}/api/users/user`)
  }

  signedIn(): boolean {
    return !!localStorage.getItem('user')
  }

  getToken() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.token
  }
}
