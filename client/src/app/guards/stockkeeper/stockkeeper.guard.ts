import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StockkeeperGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.type == 'stockkeeper') {
      return true;
    }
    this._router.navigate(['*']);
    return false;
  }
}
