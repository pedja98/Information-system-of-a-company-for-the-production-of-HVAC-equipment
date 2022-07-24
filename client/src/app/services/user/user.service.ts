import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  login(user: any) {
    return this._http.post<any>(`${environment.apiUrl}/api/users/login`, user);
  }

  logout() {
    return this._http.post<any>(`${environment.apiUrl}/api/users/logout`, null);
  }

  changePassword(data: any) {
    return this._http.put<any>(
      `${environment.apiUrl}/api/users/change-password`,
      data
    );
  }

  resetPassword(data: any) {
    return this._http.put<any>(
      `${environment.apiUrl}/api/users/reset-password`,
      data
    );
  }

  deleteUser(data: any) {
    return this._http.delete<any>(`${environment.apiUrl}/api/users/${data.id}`);
  }

  updateMyProfile(data: any) {
    return this._http.put<any>(`${environment.apiUrl}/api/users/`, data);
  }

  getUser() {
    return this._http.get<any>(`${environment.apiUrl}/api/users/user`);
  }

  getUserById(id: string) {
    return this._http.get<any>(`${environment.apiUrl}/api/users/${id}`);
  }

  getUserForEdit(id: number) {
    return this._http.get<any>(`${environment.apiUrl}/api/users/user/${id}`);
  }

  getUsers() {
    return this._http.get<any[]>(`${environment.apiUrl}/api/users/`);
  }

  signedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  changePicture(data: any) {
    return this._http.put<any>(
      `${environment.apiUrl}/api/users/change-pic`,
      data
    );
  }

  addUser(data: any) {
    return this._http.post<any>(`${environment.apiUrl}/api/users/`, data);
  }

  getToken() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.token;
  }

  editUser(data: any, id: string) {
    return this._http.put<any>(`${environment.apiUrl}/api/users/${id}`, data);
  }
}
